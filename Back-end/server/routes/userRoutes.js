const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tokenValidation = require("../middleware/tokenValidation");

router.post("/signup", userController.createUser);

router.post("/login", userController.loginUser);

router.post(
  "/profile",
  tokenValidation.validateToken,
  userController.getUserProfile
);

router.put(
  "/profile",
  tokenValidation.validateToken,
  userController.updateUserProfile
);

router.post("/validate-token", tokenValidation.validateToken, (req, res) => {
  res.status(200).send({ valid: true });
});

module.exports = router;
