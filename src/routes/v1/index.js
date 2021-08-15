import {Router} from "express"
import {pingRoutes} from "./ping.js"
import {graphQlRoutes} from "./graphql.js"

const v1 = Router()

v1.use(pingRoutes)
v1.use(graphQlRoutes)

export {v1}