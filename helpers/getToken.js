const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const getToken = (user) => {
  const token = jwt.sign(user, secret, { expiresIn: "1d" });
  return { succes: true, user, token };
};

module.exports = getToken;
