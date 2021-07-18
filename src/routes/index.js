import {Router} from "express";
import {pingRoutes} from "./ping.js";

const routes = Router();

routes.use(pingRoutes);

export {routes};