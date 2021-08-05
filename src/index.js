import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";


//import {authenticationMiddleware} from "./middlewares/authenticationMiddleware.js";
import {routes} from "./routes/index.js";

const startServer = async () => {
    await mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    const app = express();

    // noinspection JSCheckFunctionSignatures
    app.use(morgan("dev"));
    // noinspection JSCheckFunctionSignatures
    app.use(cors());

    //app.use(authenticationMiddleware);
    app.use(routes);

    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

// noinspection JSIgnoredPromiseFromCall
startServer();
