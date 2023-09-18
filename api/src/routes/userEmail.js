const { Router } = require("express");

const userEmail = Router();

userEmail.get("/userEmail");

module.exports = userEmail;
