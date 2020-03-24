const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model.js");
const router = express.Router();

// const tokens = {};
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username }).first();
    const passwordValid = await bcrypt.compareSync(password, user.password);
    if (user && passwordValid) {
      // const token = Math.random();
      // tokens[token] = user;
      req.session.user = {
        id: user.id,
        username: user.username,
      };
      res.status(200).json({ message: `Welcome ${user.username}!` });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {}
});

module.exports = router;
