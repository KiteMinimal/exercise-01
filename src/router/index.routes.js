const express = require("express");
const router = express.Router();
const controller = require("../controller/index.controller");

router.get("/", controller.homeController);
router.get("/create", controller.showformController);
router.post("/creation", controller.userCreateController);
router.get("/form", controller.formController);
router.get("/details/:useremail", controller.eachUserController);
router.get("/delete/:dbId", controller.deleteuserController);
// /delete/<%= user._id.toString() %>

module.exports = router;
