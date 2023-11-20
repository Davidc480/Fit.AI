const { Router } = require("express");
const userGettHandler = require("../handlers/userGettHandler");
const userPostHandler = require("../handlers/userPostHandler");

const userEmail = Router();

userEmail.get("/userEmail", userGettHandler);
userEmail.post("/userEmail", userPostHandler);

module.exports = userEmail;
