const { User } = require("../database");

const userGettHandler = async (req, res) => {
  const userAll = await User.findAll();
  try {
    if (userAll.length !== 0) {
      res.status(200).json(userAll);
      return;
    }
    throw new Error("No hay datos registrados");
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = userGettHandler;
