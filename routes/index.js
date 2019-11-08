var express = require("express");
var router = express.Router();
const { generateToken, verifyToken } = require("../modules/jwt.util");

/* GET home page. */
router.get("/", function(req, res, next) {
    console.log("sadf");
    res.status(200).json({
        result: "success"
    });
});
router.get("/gotoTomorrow", (req, res, next) => {
    res.status(200).json({
        result: "내일로 사진"
    });
});

module.exports = router;
