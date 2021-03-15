var router = require("express").Router();
var controller = require("../controllers/controllers");

router.post("/addcomplaint", controller.addcomplaint);
router.get("/allcomplaint", controller.getcomplaint);
router.post("/signup", controller.addnewuser)

module.exports.router = router;


