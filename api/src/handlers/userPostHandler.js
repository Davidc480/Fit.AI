const postUserEmail = require("../controllers/userPostController");
const verifyEmailUserExistence = require("../helper/verifyEmailUserExistence");
const verifyIsEmail = require("../helper/verifyIsEmail");

const userPostHandlers = async (req, res) => {
  const { email } = req.body;

  try {
    if (verifyIsEmail(email)) {
      if (!(await verifyEmailUserExistence(email))) {
        const postUser = await postUserEmail(email);
        res.status(200).json(postUser);
        return;
      }
    }
    throw new Error("Correo electrónico inválido");
  } catch (err) {
    res.status(401).json({
      error: err.message,
    });
  }
};

module.exports = userPostHandlers;
