import {Router} from "express";
import {graphqlHTTP} from "express-graphql";
import {buildContext} from "../graphql/context.js";
import {schema} from "../graphql/index.js";

const graphQlRoutes = Router();

graphQlRoutes.use("/graphql", graphqlHTTP(async (req) => ({
    schema,
    context: await buildContext(req),
    graphiql: false
})));

export {graphQlRoutes}