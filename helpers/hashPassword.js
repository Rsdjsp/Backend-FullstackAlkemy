const bycript = require("bcrypt");

const hashPassword = async (password) => {
  const salt = await bycript.genSalt(10);
  const hash = await bycript.hash(password, salt);
  return hash;
};

const passwordVerify = async (password,userpswd)=>{
    const passwordV = await bycript.compare(password, userpswd)
    return passwordV
}


module.exports = { hashPassword, passwordVerify };
