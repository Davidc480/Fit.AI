const { Router } = require("express");
const userPostHandler = require("../handlers/userPostHandler");

const userEmail = Router();

userEmail.get("/userEmail");
userEmail.post("/userEmail", userPostHandler);

module.exports = userEmail;
