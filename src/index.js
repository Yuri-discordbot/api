const express = require("express");
const morgan = require("morgan");

const app = express();

// noinspection JSCheckFunctionSignatures
app.use(morgan("dev"));

app.get("/ping", async (req, res) => {
    res.send({
        message: "pong",
    });
});

let port = process.env.PORT || 3001;

app.listen(port);
