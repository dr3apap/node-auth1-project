const express = require("express");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const loginRouter = require("../loginAuth/loginRouter");

const server = express();
server.use(express.json());
server.use(helmet());

server.use("/api/login", loginRouter);

server.use("/", (req, res) => {
  res.sed(`<h1>You Can come in if you have the key!!</h1>`);
});

module.exports = server;
