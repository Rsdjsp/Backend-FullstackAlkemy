const { body } = require("express-validator");

const signUpvalidate = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is Mandatory")
    .isEmail()
    .withMessage("Enter a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password is Mandatory")
    .isLength({ min: 8 })
    .withMessage("The password should have 8 characters as minimum"),
];

const signInValidate = [
  body("email")
    .notEmpty()
    .withMessage("Email is Mandatory")
    .isEmail()
    .withMessage("Enter a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password is Mandatory")
    .isLength({ min: 8 })
    .withMessage("The password should have 8 characters as minimum"),
];

const inputsValidate = [
  body("concepto")
    .notEmpty()
    .withMessage("Please enter a valid concept")
    .isString()
    .withMessage("Format not valid"),
  body("monto")
    .notEmpty()
    .withMessage("Please enter a valid mont")
    .isString()
    .withMessage("Format not valid"),
  body("tipo")
    .notEmpty()
    .withMessage("Please enter a valid type")
    .isString()
    .withMessage("Format not valid"),
  body("categoria")
    .notEmpty()
    .withMessage("Please enter a valid category")
    .isString()
    .withMessage("Format not valid"),
];






module.exports = { signUpvalidate, signInValidate, inputsValidate };
