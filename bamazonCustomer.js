var mysql = require("mysql");
// var inquirer = require("inquirer");

// create the connection information for the sql database
var db = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "liz",

  // Your password
  password: "1234",
  database: "bamazon_DB"
});

// Challenge #1: Customer View (Minimum Requirement)

// inquirer
//   .prompt([
    /* Pass your questions in here */
//   ])
//   .then(answers => {
    // Use user feedback for... whatever!!
//   });

// The basic application is fairly simple: Upon loading up the program, the user is prompted on 
// whether they would like to "POST AN ITEM" or "BID ON AN ITEM"

db.connect();
db.query("SELECT * FROM products", function(err, results) {
  if (err) throw err;
  // line below filters for vanilla using filter (array method)

  // console.log("results", results.filter(product =>product.flavor === "vanilla"));

  // can also write this using mysql syntax like so.. notice vanilla is in quotes
//   db.query("SELECT * FROM products WHERE category = 'Footwear'", function(err, results) {
  
    // console.log("results", results.filter(product =>product.category === "Footwear"));
  
  console.log("results", results);
 
});
db.end();