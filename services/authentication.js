
const config = require('./config');
const globalConst = require('./globalConst');
// const getLogin = "CALL GetAuthentication(?,?)";

module.exports = class Authentication {
  // const working_status=1;//
   constructor(){
     this.getLogin = "CALL GetAuthentication(?,?)";
     this.insert_sql = "INSERT INTO imran.address(`address_line1`,`address_line2`,`city`,`state`,`country`,`pincode`)VALUES(?,?,?,?,?,?)";
   }

   set username(username){
     this._username=username;
   }

   get username(){
     return this._username;
   }
   // constructor(firstName, lastName) {
   //     this.firstName = firstName;
   //     this.lastName = lastName;
   // }

   login(username,password) {
     // console.log(globalConst);

     config.getConnection(function(err,connection){
       // console.log(connection);
       connection.beginTransaction(function(err) {
         if (err) { throw err; }
         //   connection.query(this.insert_sql,['st bed','block','banglore','karnataka','india','590039'], function(err, result) {
         //     if (err) {
         //       connection.rollback(function() {
         //         throw err;
         //       });
           //     }
           //   });
           // var log = result.insertId;
           // let log = '1';
          //  console.log("pring");
          // console.log(this.getLogin);
         connection.query(globalConst.getLogin,['vijay',1],function(err, result) {
           if (err) {
             connection.rollback(function() {
               throw err;
             });
           }
           console.log(result);

       });

         connection.commit(function(err) {
         if (err) {
           connection.rollback(function() {
             throw err;
           });
         }
         console.log('Transaction Complete.');
         connection.release();
         });
       });
     });
      // return x+y;
    }

   display() {
       console.log(this.firstName + " " + this.lastName);
   }
}

// const config = require('./config');
// let xy = function(){
//   let output = 0;
//   function add(x,y){
//      return output =x+y;
//   }
// };

// module.exports = {
//     add: function(x,y) {return output =x+y;},
//     otherMethod: function() {}
// }

// const funcs = {
//     add(x,y) { return x+y;},
//     bar() { console.log('bar') },
//     baz() { foo(); bar() }
// }
//
// // export default funcs
// module.exports = funcs;

// config.getConnection(function(err,connection){
//   console.log(connection);
//   connection.beginTransaction(function(err) {
//     if (err) { throw err; }
//       connection.query(insert_sql,['st bed','block','banglore','karnataka','india','590039'], function(err, result) {
//         if (err) {
//           connection.rollback(function() {
//             throw err;
//           });
//         }
//
//
//     });
//     // var log = result.insertId;
//     let log = '1';
//     connection.query(sql,log,function(err, result) {
//       if (err) {
//         connection.rollback(function() {
//           throw err;
//         });
//       }
//       console.log(result);
//
//   });
//
//     connection.commit(function(err) {
//     if (err) {
//       connection.rollback(function() {
//         throw err;
//       });
//     }
//     console.log('Transaction Complete.');
//     connection.release();
//     });
//   });
// });

// module.exports = xy;
