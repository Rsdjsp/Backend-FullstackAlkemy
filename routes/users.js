const express = require("express");
const UserService = require("../services/users");

function users(app) {
  const router = express.Router();
  app.use("/users", router);

  const userService = new UserService();

  router.get("/", async (req, res) => {
    const users = await userService.getAll();
    return res.status(200).json(users);
  });
}




module.exports = users;
