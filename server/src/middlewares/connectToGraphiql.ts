//graphql-Setup

import { Express } from "express";
import { graphqlHTTP } from "express-graphql";
import { schema, resolver } from "@graphql";

export default (app: Express) => {
  try {
    app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        rootValue: resolver,
        graphiql: true,
      })
    );
  } catch (error) {
    console.log("Error At GraphQL :: ", error);
    throw new Error("Something Went Wrong...");
  }
};
