const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// noinspection JSCheckFunctionSignatures
app.use(morgan("dev"));

const allowedOrigins = ["https://configurator.yuri.olaren.dev", "https://configurator.beta.yuri.olaren.dev"];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}

// noinspection JSCheckFunctionSignatures
app.use(cors(corsOptions))

app.get("/ping", async (req, res) => {
    res.send({
        message: "pong",
    });
});

let port = process.env.PORT || 3001;

app.listen(port);
