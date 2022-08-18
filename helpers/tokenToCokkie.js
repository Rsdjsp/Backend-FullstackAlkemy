const { env } = require("../config");

function tokenToCookie(res, newUser) {
  if (!newUser) {
    return res
      .status(201)
      .cookie("token", "", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        expires: new Date(),
      })
      .json({ LogOut: true });
  } else {
    if (env === "dev") {
      return res.status(201).cookie("token", newUser.token).json(newUser);
    } else {
      return res
        .status(201)
        .cookie("token", newUser.token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .json(newUser);
    }
  }
}

module.exports = tokenToCookie;
