const { User } = require("../database");

const userPostController = async (email) => {
  const newEmail = await User.create({
    email,
  });
  return { user: newEmail };
};

module.exports = userPostController;
