import {Router} from "express"
import {v1} from "./v1/index.js"

const routes = Router()

// noinspection JSCheckFunctionSignatures
routes.use("/v1", v1)

export {routes}