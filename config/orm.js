// `selectAll()`
//     * `insertOne()`
//     // * `updateOne()` 

var connection = require("../config/connection.js");
// Helper function for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

var orm = {
    selectAll: (table, cb) => {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, data) => {
            cb(data);
        })

    },
    insertOne: (table, cols, vals, cb) => {

        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length +1);
        queryString += ") ";

        
        // var queryString = `INSERT INTO ${table} (${cols.toString()}, date) VALUES (${vals}, now())`;
        
        connection.query(queryString, vals, (err, data) => {
           
            cb(data);
        });
    }
}

module.exports = orm;
