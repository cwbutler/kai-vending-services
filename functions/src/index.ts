/* eslint-disable new-cap */
import express from "express";
import cors from "cors";
import * as functions from "firebase-functions";
import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4";
import {schema} from "./schema";
import http from "http";
import {
  ApolloServerPluginDrainHttpServer,
} from "@apollo/server/plugin/drainHttpServer";

const app = express();
const httpServer = http.createServer(app);

app.use(cors());
app.use(express.json());

const plugins = [ApolloServerPluginDrainHttpServer({httpServer})];

const server = new ApolloServer({
  schema,
  status400ForVariableCoercionErrors: true,
  introspection: true,
  plugins: plugins,
});

server.start().then(() => {
  app.use("/", expressMiddleware(server));
});

const graphql = functions.https.onRequest(app);
export {graphql};
