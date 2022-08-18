const { PrismaClient } = require("@prisma/client");
const getToken = require("../helpers/getToken");
const { hashPassword, passwordVerify } = require("../helpers/hashpassword");

const prisma = new PrismaClient();
class User {
  async getAll() {
    const users = await prisma.user.findMany({});
    return users;
  }

  async register(data) {
    const hashed = await hashPassword(data.password);
    data.password = hashed;
    const { name, password, email } = data;
    const user = await prisma.user.create({
      data: {
        name: name,
        password: password,
        email: email,
      },
    });
    const newUser = getToken(user);
    return newUser;
  }

  async logIn(data) {
    const { email, password } = data;
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    const validate = passwordVerify(password, user.password);
    if (validate) {
      const validUser = getToken(user);
      return validUser;
    } else {
      return { sucess: false, message: "The credentials are incorrect" };
    }
  }
}

module.exports = User;
