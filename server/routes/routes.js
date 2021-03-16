var router = require("express").Router();
var controller = require("../controllers/controllers");

router.post("/addcomplaint", controller.addcomplaint);
router.get("/allcomplaintCustomer", controller.getcomplaint);
router.post("/signup", controller.addnewuser);
router.post("/signin",controller.loginuser);

module.exports.router = router;


