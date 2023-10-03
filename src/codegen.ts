import type { CodegenConfig } from "@graphql-codegen/cli";
import { schemaJson } from "../functions/src/schema";

const config: CodegenConfig = {
  overwrite: true,
  schema: schemaJson,
  generates: {
    "src/schemaTypes.ts": {
      config: {
        useIndexSignature: true,
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
