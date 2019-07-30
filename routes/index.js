const express = require('express');
const router = express.Router();

router.get('/routecheck', (req, res) => {
  let  routercheck = require('../services/routercheck');
  res.send("in index.js : "+routercheck);
});

module.exports =router;
