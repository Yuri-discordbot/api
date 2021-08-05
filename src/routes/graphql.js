import {Router} from "express";
import {graphqlHTTP} from "express-graphql";
import {schema} from "../graphql/index.js";

const graphQlRoutes = Router();

graphQlRoutes.use("/graphql", graphqlHTTP({
    schema,
    graphiql: false
}));

export {graphQlRoutes}