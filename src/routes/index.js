const router = require("express").Router();
const ping = require("./ping");

router.use(ping);

module.exports = router;