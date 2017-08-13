// Set up MySQL connection.
var mysql = require("mysql");
//Use heroku
var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
});

//Use local machine to connect
// var connection = mysql.createConnection({
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "milomilo",
//     database: "burgers_db"
// });

// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });


// Export connection for our ORM to use.
module.exports = connection;