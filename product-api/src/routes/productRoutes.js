const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Product routes placeholder");
});

module.exports = router;
