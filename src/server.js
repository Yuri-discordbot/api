const express = require("express");
const morgan = require("morgan");
const helloData = require("data-access");

const app = express();

// noinspection JSCheckFunctionSignatures
app.use(morgan("dev"));

app.get("/", async (req, res) => {
    res.send({
        message: "Hello, world",
        data: helloData(),
    });
});

app.listen(3001);
