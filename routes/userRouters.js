const express = require("express");
const userControllers = require("../controllers/userController");
const router = express.Router();

router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createNewUser);

router.route("/:id").get(userControllers.getUserById);
module.exports = router;

