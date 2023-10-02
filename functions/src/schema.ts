import {makeExecutableSchema} from "@graphql-tools/schema";
import merge from "lodash.merge";
import {printSchema} from "graphql";
import {
  typeDef as vendorTypeDefs,
  resolvers as vendorResolvers,
} from "./models/vendor";

const Base = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Vendor {
    _empty: String
  }
`;

export const schema = makeExecutableSchema({
  typeDefs: [Base, vendorTypeDefs],
  resolvers: merge(vendorResolvers),
});

export const schemaJson = printSchema(schema);
