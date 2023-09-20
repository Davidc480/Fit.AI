const { User } = require("../database");

const verifyEmailUserExistence = async (email) => {
  const userEmail = await User.findOne({
    where: { email },
  });
  if (userEmail) {
    throw new Error("Correo electrónico ya registrado");
  }
  return false;
};

module.exports = verifyEmailUserExistence;
