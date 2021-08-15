import {Router} from "express"
import {graphqlHTTP} from "express-graphql"
import {buildContext} from "../../graphql/v1/context.js"
import {schema} from "../../graphql/v1/index.js"

const graphQlRoutes = Router()

graphQlRoutes.use("/v1/graphql", graphqlHTTP(async (req) => ({
    schema,
    context: await buildContext(req),
    graphiql: false
})))

export {graphQlRoutes}