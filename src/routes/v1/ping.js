import {Router} from "express"

const pingRoutes = Router()

pingRoutes.get("/ping", async (req, res) => {
    res.send({
        message: "pong",
    })
})

export {pingRoutes}