import {Router} from "express";
import {pingRoutes} from "./ping";

const routes = Router();

routes.use(pingRoutes);

export {routes};