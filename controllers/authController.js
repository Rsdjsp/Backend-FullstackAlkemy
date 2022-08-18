const tokenToCookie = require("../helpers/tokenToCokkie");
const UserService = require("../services/users");
const userService = new UserService();
const errorMessage = require("../helpers/errorMessage")


const signUp = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    return tokenToCookie(res, user);
  } catch (error) {
    return errorMessage(error,res);
  }
};

const signIn = async (req, res) => {
  try {
    const user = await userService.logIn(req.body);
    return tokenToCookie(res, user);
  } catch (error) {
    return errorMessage(error,res);
  }
};

module.exports = { signUp, signIn };
