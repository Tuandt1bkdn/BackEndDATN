var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Tuan2868",
  database: "datn",
});

module.exports = connection;
