require("dotenv").config();

const fs = require("fs");
const https = require("https");
const express = require("express");
const server = express();

const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const port = process.env.PORT || 3001;

const options = {
  key: fs.readFileSync("./certs/new_key.pem"),
  cert: fs.readFileSync("./certs/new_cert.pem"),
};

const userEmail = require("../src/routes/userEmail");

const { sequelize } = require("./database");

const app = https.createServer(options, server);

const corsOptions = {
  origin: "*",
};

server.use(cors(corsOptions));
server.use(bodyParser.json({ limit: "10mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
server.use(morgan("dev"));
server.use("/", userEmail);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err.message });
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database created");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
