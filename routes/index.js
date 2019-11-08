var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.status(200).json({
        result: "success"
    });
});
router.get("/gotoTomorrow", () => {
    res.status(200).json({
        result: "내일로 사진"
    });
});

module.exports = router;
