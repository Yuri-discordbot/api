const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const authentication = require("./middlewares/authenticationMiddleware");
const routes = require("./routes");

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to MongoDB database");
});

// noinspection JSCheckFunctionSignatures
app.use(morgan("dev"));

// noinspection JSCheckFunctionSignatures
app.use(cors());
app.use(authentication);
app.use(routes);

let port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
