import {Router} from "express";
import {pingRoutes} from "./ping.js";
import {graphQlRoutes} from "./graphql.js";

const routes = Router();

routes.use(pingRoutes);
routes.use(graphQlRoutes);

export {routes};