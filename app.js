const express = require('express');
const app = express();

app.use(express.static('./public'));

//routes start
const routes = require('./routes/index');
const users = require('./routes/users');

app.use('/',routes);
app.use('/users',users);
//routes ends
app.listen(3003,() => {
  console.log("running port..");
});
