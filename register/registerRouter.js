const express = require("express");
const Users = require("../users/users-model.js");
const db = require("../data/dbConfig.js");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", (req, res) => {
  const passHash = req.body;

  const ROUNDS = process.env.HASHING_ROUNDS || 8;
  const hash = bcrypt.hashSync(passHash.password, ROUNDS);

  passHash.password = hash;

  Users.add(passHash).then(user => {
    res.status(201).json({ message: "users created successfully", user: user });
  });
});

module.exports = router;
