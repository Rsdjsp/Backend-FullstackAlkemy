const express = require("express");
const {
  input,
  getReg,
  update,
  remove,
} = require("../controllers/operationController");
const validateToken = require("../middleware/validateToken");
const { validatorHandler } = require("../middleware/validatorHandler");
const { inputsValidate } = require("../middleware/validInputs");

function operations(app) {
  const router = express.Router();
  app.use("/operations", router);

  router.post("/input", validateToken, validatorHandler(inputsValidate), input);
  router.get("/", validateToken, getReg);
  router.put("/:id", validateToken, update);
  router.delete("/:id", validateToken, remove);
}

module.exports = operations;
