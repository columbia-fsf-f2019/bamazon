var mysql = require("mysql");
var inquirer = require("inquirer");
var db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "myPassword1234*",
    database: "bamazon_db"
});


db.connect((err) => {
    if (err) throw err;
    console.log("Welcome to Bamazon!");
    queryProducts();
});

function queryProducts() {
    connection.query("SELECT * FROM products", (err, res) => {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
      }
      console.log("-----------------------------------");
    });
  }

