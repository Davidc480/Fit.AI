const postUserEmail = require("../controllers/userPostController");
const verifyEmailUserExistence = require("../helper/verifyEmailUserExistence");
const verifyIsEmail = require("../helper/verifyIsEmail");

const userPostHandlers = async (req, res) => {
  const { email } = req.body;

  try {
    if (await verifyIsEmail(email)) {
      if (await verifyEmailUserExistence(email)) {
        const postUser = await postUserEmail(email);
        res.status(200).json(postUser);
      }
    }
  } catch (err) {
    res.status(401).json({
      error: err.message,
    });
  }
};

module.exports = userPostHandlers;
