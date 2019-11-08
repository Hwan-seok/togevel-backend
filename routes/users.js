var express = require("express");
const { generateToken, verifyToken } = require("../modules/jwt.util");
var router = express.Router();

/* GET users listing. */
router.post("/register", function(req, res, next) {
    console.log(req.body);
    const accessToken = generateToken(req.body);
    res.status(200).json({ accessToken });
});

/* GET users listing. */
router.post("/login", async (req, res, next) => {
    console.log(req.body);
    const verified = await verifyToken(req.body.accessToken);
    console.log("asdf,", verified);
    res.status(200).json({ result: verified });
});
module.exports = router;
