const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());
app.use(express.static('./public'));

const routes = require('./routes/index');
const users = require('./routes/users');

app.use('/',routes);
app.use('/users',users);

const db_config = require('./services/config');
const db = mysql.createConnection(db_config);

db.connect((err) => {
  if(err){
    throw error;
  }
  console.log("connect");
});

let sql = `CALL  GetAddresses(?)`;
let insert_sql = "INSERT INTO imran.address(`address_line1`,`address_line2`,`city`,`state`,`country`,`pincode`)VALUES(?,?,?,?,?,?)";



/* Begin transaction */
// db.beginTransaction(function(err) {
//   if (err) { throw err; }
//     db.query(insert_sql,['st bed','block','banglore','karnataka','india','590039'], function(err, result) {
//       if (err) {
//         db.rollback(function() {
//           throw err;
//         });
//       }
//
//       // var log = result.insertId;
//       let log = '1';
//       db.query(sql,log,function(err, result) {
//         if (err) {
//           db.rollback(function() {
//             throw err;
//           });
//         }
//         console.log(result);
//         db.commit(function(err) {
//         if (err) {
//           db.rollback(function() {
//             throw err;
//           });
//         }
//         console.log('Transaction Complete.');
//         db.end();
//       });
//     });
//   });
// });
/* End transaction */

/* Begin transaction */
db.beginTransaction(function(err) {
  if (err) { throw err; }
    db.query(insert_sql,['st bed','block','banglore','karnataka','india','590039'], function(err, result) {
      if (err) {
        db.rollback(function() {
          throw err;
        });
      }


  });
  // var log = result.insertId;
  let log = '1';
  db.query(sql,log,function(err, result) {
    if (err) {
      db.rollback(function() {
        throw err;
      });
    }
    console.log(result);

});

  db.commit(function(err) {
  if (err) {
    db.rollback(function() {
      throw err;
    });
  }
  console.log('Transaction Complete.');
  db.end();
  });
});
/* End transaction */


// db.query(sql, true, (error, results, fields) => {
//   if (error) {
//     return console.error(error.message);
//   }
//   console.log(results[0]);
// });

// db.end();

app.get('/createdb', (req, res) => {
  // console.log(req);
  let sql = "CREATE DATABASE nodelearning";
  db.query(sql, (err,result) => {
    if(err) throw err;
    console.log(result);
  });
  res.send("datbase page..");
});

// get table data


// console.log(res);
app.get('/getdetails', (req, res) => {
  // console.log(req);
  let sql = "SELECT * FROM products";
  db.query(sql, (err,result) => {
    if(err) throw err;
    console.log(result);
    res.json(result);
  });
});
// get using parms
app.get('/getproductdetails/:id/:name', (req, res) => {
  let sql =    `SELECT * FROM products WHERE sno = ${req.params.id}`;
  db.query(sql, (err,result) => {
    if(err) throw err;
    console.log(result.length);
    if(result.length>0)
      res.json(result);
      else
      res.send("No Data found");
  });
  // console.log(rc
});

// using post method
app.post('/add-product', (req, res) => {
  console.log(req.body);
  let name = req.body.product;
  let qty = req.body.qty;
  let price = req.body.price;

  let sql = "INSERT INTO  products (name,stock,price) VALUES(?,?,?)";
  db.query(sql,[name,qty,price], (err,result,fields) => {
    if(err) throw err;
    console.log(result);
    res.send("data sucessfully inserted");
    res.end();
  });
});
app.listen(3003,() => {
  console.log("running port..");
});
