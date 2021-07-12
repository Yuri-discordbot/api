const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// noinspection JSCheckFunctionSignatures
app.use(morgan("dev"));

// noinspection JSCheckFunctionSignatures
app.use(cors())

app.get("/ping", async (req, res) => {
    res.send({
        message: "pong",
    });
});

let port = process.env.PORT || 3001;

app.listen(port);
