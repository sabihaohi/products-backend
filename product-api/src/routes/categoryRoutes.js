const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Category routes placeholder");
});

module.exports = router;
