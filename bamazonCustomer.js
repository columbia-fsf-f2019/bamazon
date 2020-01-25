var mysql = require("mysql");
//var inquirer = require("inquirer");

var db = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "adjesum7",
  database: "bamazon_DB"
});

db.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    console.log("results", results);
});
db.end();