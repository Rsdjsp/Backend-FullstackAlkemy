const express = require("express");
const { signUp, signIn } = require("../controllers/authController");
const { validatorHandler } = require("../middleware/validatorHandler");
const { signUpvalidate, signInValidate } = require("../middleware/validInputs");

function auth(app) {
  const router = express.Router();
  app.use("/auth", router);

  router.post("/register", validatorHandler(signUpvalidate), signUp);
  router.post("/login", validatorHandler(signInValidate), signIn);
}

module.exports = auth;



