var mysql = require("mysql");
var inquirer = require("inquirer");
var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "myPassword1234*",
  database: "bamazon_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("Welcome to Bamazon!");
  queryProducts();
});

function queryProducts() {
  db.query("SELECT * FROM products", (err, res) => {
    if (err) throw err;
    console.log("--------------------------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].item_id +
          " | " +
          res[i].product_name +
          " | " +
          res[i].department_name +
          " | " +
          res[i].price +
          " | " +
          res[i].stock_quantity
      );
    }
    console.log("--------------------------------------------------");

    inquirer
      .prompt([
        {
          type: "confirm",
          name: "confirm",
          message: "Would you like to make a purchase?",
          default: true
        }
      ])
      .then(r => {
        if (r.confirm) {
          buyProduct();
        } else {
          console.log("Thank you for visiting");
          db.end();
        }
      });
  });
}

function buyProduct() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "list_id",
        message:
          "Please enter the list number of the item you would like to purchase."
      },
      {
        type: "input",
        name: "quantity",
        message: "How many of this item would you like to purchase?"
      }
    ])
    .then(function(choice) {
      db.query(
        "SELECT * FROM products WHERE item_id=?",
        choice.list_id,
        (err, res) => {
          for (var i = 0; i < res.length; i++) {
            if (choice.quantity > res[i].stock_quantity) {
              console.log(
                "--------------------------------------------------------"
              );
              console.log(
                "Sorry! Not enough in stock. Please try another purchase."
              );
              console.log(
                "--------------------------------------------------------"
              );
              queryProducts();
            } else {
              console.log("Thank you for your order!");
              console.log("----------------------------------");
              console.log("You've selected:");
              console.log("Item: " + res[i].product_name);
              console.log("Price: " + res[i].price);
              console.log("Quantity: " + choice.quantity);
              console.log("----------------");
              console.log("Total: " + res[i].price * choice.quantity);
              console.log("===================================");

              var newQuantity = res[i].stock_quantity - choice.quantity;
              var itemNum = choice.list_id;
              updateStock(newQuantity, itemNum);
            }
          }
        }
      );
    });
}

function updateStock(num1, num2) {
  db.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: num1
      },
      {
        item_id: num2
      }
    ],
    (err, res) => {
      if (err) throw err;
    }
  );
  queryProducts();
}
