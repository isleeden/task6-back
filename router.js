const Router = require("express");
const Controller = require("./controller");
const router = new Router();

router.get("/ru", Controller.getRuData);
router.get("/us", Controller.getUsData);
router.get("/ua", Controller.getUaData);
router.get("/csv", Controller.getCsv);

// router.get("/inbox/:recipient", Controller.getInboxMessages);
// router.get("/sent/:author", Controller.getSentMessages);
// router.post("/send", Controller.sendMessage);

module.exports = router;
