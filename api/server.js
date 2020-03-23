const express = require("express");
const helmet = require("helmet");
const registerRouter = require("../register/registerRouter");
const loginRouter = require("../loginAuth/loginRouter");
const usersRouter = require("../users/usersRouter");

const server = express();
server.use(express.json());
server.use(helmet());

server.use("/api/users", usersRouter);
server.use("/api/register", registerRouter);
server.use("/api/login", registerRouter);

server.use("/", (req, res) => {
  res.sed(`<h1>You Can come in if you have the key!!</h1>`);
});

module.exports = server;
