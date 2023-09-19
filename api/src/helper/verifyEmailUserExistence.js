const { User } = require("../database");

const verifyEmailUserExistence = async (email) => {
  const userEmail = await User.findOne({
    where: { email },
  });

  return !!userEmail;
};

module.exports = verifyEmailUserExistence;
