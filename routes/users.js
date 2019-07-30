const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("In route users.js ");
});

router.get('/details', (req, res) => {
  res.send("In route users.js details");
});

module.exports =router;
