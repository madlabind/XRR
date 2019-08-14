const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("In route users.js ");
});

router.get('/details', (req, res) => {
  res.send("In route users.js details");
});

router.get('/login', (req, res) => {
  console.log("inslide login");
  const Authentication = require('../services/authentication');
  console.log('inluded');
  const auth = new Authentication();
  auth.username('vijay');
  console.log(auth.username);
  console.log('call');
  auth.login(2,4);
  // console.log(authentication.add(2,4));
  res.send("In route login.js details");
});

module.exports =router;
