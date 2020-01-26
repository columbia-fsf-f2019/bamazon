var mysql = require("mysql");
var Table = require("cli-table3");
var inquirer = require("inquirer");

var db = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_DB"
});

db.connect(function(err) {
    if (err) throw err;
    welcomePrompt();
});

function welcomePrompt() {
  inquirer.prompt([
    {
      name: "welcome",
      message: "Welcome to Bamazon! Would you like to continue?",
      type: "confirm",
      default: true

    }]).then(function(user) {
      if (user.welcome === true) {
        inventory();
      } else {
        console.log("Thank you! Come back again another day!");
        welcomePrompt();
      }
    });
}

function inventory() {
  var table = new Table({
    head: ['ID', 'Item', 'Department', 'Price', 'Stock'],
    colWidths: [10, 30, 30, 30, 30]
  });

  listInventory();

  function listInventory() {
    db.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        var itemId = res[i].item_id,
            productName = res[i].product_name,
            departmentName = res[i].department_name,
            price = res[i].price,
            stockQuantity = res[i].stock_quantity;

        table.push([itemId, productName, departmentName, price, stockQuantity]);
      }
      console.log(table.toString());
      purchasePrompt();
    });
  }
}

function purchasePrompt() {
  inquirer.prompt([
    {
      name:"purchase",
      message:"Would you like to purchase an item?",
      type:"confirm",
      default: true
    }
  ]).then(function(user) {
    if (user.purchase === true) {
      storePrompt();
    } else {
      console.log("Thank you! Come back again another day!");
    }
  });
}

function storePrompt() {
  inquirer.prompt([
    {
      name:"inputId",
      message:"Please select the item ID to purchase.",
      type:"input"
    },
    {
      name:"inputQuantity",
      message:"How much quantity would you like to purchase?",
      type:"input"
    }
  ]).then(function(userPurchase) {
    db.query("SELECT * FROM products WHERE item_id=?", userPurchase.inputId, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        if (userPurchase.inputQuantity > res[i].stock_quantity) {
          console.log("Sorry! Not enough stock. Try again.");
          welcomePrompt();
        } else {
          console.log("We will process your order.");
          console.log("Item selected:");
          console.log("Item: " + res[i].product_name);
          console.log("Department: " + res[i].department_name);
          console.log("Price: " + res[i].price);
          console.log("Quantity: " + userPurchase.inputQuantity);
          console.log("Total: " + res[i].price * userPurchase.inputQuantity);

          var newStock = (res[i].stock_quantity - userPurchase.inputQuantity);
          var purchaseId = userPurchase.inputId;
          orderPrompt(newStock, purchaseId);
        }
      }
    });
  });
}

function orderPrompt(newStock, purchaseId) {
  inquirer.prompt([
    {
      name:"confirmOrder",
      message:"Would you like to proceed with this purchase?",
      type:"confirm",
      default: true
    }
  ]).then(function(userConfirm) {
    if (userConfirm.confirmOrder === true) {
      db.query("UPDATE products SET ? WHERE ?", [{
        stock_quantity: newStock
      }, {
        item_id: purchaseId
      }], function(err, res) {});
      console.log("Purchase Complete!");
      welcomePrompt();
    } else {
      console.log("Try again another day!");
      welcomePrompt();
    }
  });
}