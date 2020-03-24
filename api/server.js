const express = require("express");
const helmet = require("helmet");
const restricted = require("../middleware/autenthication");
const session = require("express-session");
const registerRouter = require("../register/registerRouter");
const loginRouter = require("../loginAuth/loginRouter");
const usersRouter = require("../users/usersRouter");
const server = express();
server.use(helmet());
server.use(express.json());
server.use(
  session({
    secret: "keep it secret, keep it safe and secure!",
    resave: false,
    saveUninitialized: true, //GDPR laws require that we check with client
    cookie: {
      httpOnly: true, // No access from JS
      maxAge: 1000 * 60 * 60,
      secure: false, // true in productions to send only via https
    },
  }),
);

server.use("/api/users", authentication, usersRouter);
server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);

server.use("/", (req, res) => {
  res.send(`<h1>You Can come in if you have the key!!</h1>`);
});

module.exports = server;
