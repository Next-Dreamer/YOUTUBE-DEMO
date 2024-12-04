// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : 'root',
  database: 'Youtube',
  dateStrings : true
});

module.exports = connection
// A simple SELECT query
// connection.query(
//   'SELECT * FROM `users`',
//   function (err, results, fields) {
//     var {id, email, name, created_at} = results[0];
//     console.log(id);
//     console.log(email);
//     console.log(name);
//     console.log(created_at);

//   }
// );

// // Using placeholders
// connection.query(
//   'SELECT * FROM `users`',
//   ['Page', 45],
//   function (err, results) {
//     console.log(results);
//   }
// );