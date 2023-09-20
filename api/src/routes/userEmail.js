const { Router } = require("express");

const userEmail = Router();

userEmail.get("/userEmail");
userEmail.post("/userEmail");

module.exports = userEmail;
