import {Router} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildSchema} from "graphql";
import {root} from "../resolvers/index.js";
import fs from "fs"

const graphQlRoutes = Router();

let schema = fs.readFileSync("src/schema.graphql").toString();
schema = buildSchema(schema);

graphQlRoutes.use("/graphql", graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: false
}));

export {graphQlRoutes}