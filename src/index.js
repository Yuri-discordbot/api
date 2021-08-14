import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import {environment} from "./env.js";
import {routes} from "./routes/index.js";

const startServer = async () => {
    await mongoose.connect(environment.mongoUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    const app = express();

    // noinspection JSCheckFunctionSignatures
    app.use(morgan("dev"));
    // noinspection JSCheckFunctionSignatures
    app.use(cors());
    app.use(routes);

    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

// noinspection JSIgnoredPromiseFromCall
startServer();
