const router = require("express").Router();

router.get("/ping", async (req, res) => {
    res.send({
        message: "pong",
    });
});

module.exports = router;