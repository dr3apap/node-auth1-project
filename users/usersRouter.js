const express = require("express");
const bcrypt = require("bcryptjs");
const db = require("../data/dbConfig");
const Users = require("./users-model");

const router = express.Router();

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
