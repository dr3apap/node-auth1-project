const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;
});

module.exports = router;
