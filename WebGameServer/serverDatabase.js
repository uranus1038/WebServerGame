const mysql = require('mysql2');
const dbConnection = mysql.createPool( {
    host: "localhost",
    user:"root",
    password: "",
    database: "node_test"
}).promise();

module.exports = dbConnection ; 