var mysql = require("mysql");
var inquirer = require("inquirer");
var divider =
  "\n--------------------------------------------------------------------\n";

// create the connection information for the sql database
var db = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "liz",

  // Your password
  password: "1234",
  database: "bamazon2_db"
});

// connect to the mysql server and sql database
db.connect(function(err) {
  if (err) throw err;
  enterStorePrompt();
});

function enterStorePrompt(hasAlreadyOrdered) {
  inquirer
    .prompt([
      {
        name: "enter",
        message:
          "WELCOME TO BAMAZON! Can I help you find something? Here is a list of our most popular items: ",
        type: "confirm"
      }
    ])
    .then(function(customer) {
      if (customer.enter === true) {
        showItems();
      } else {
        console.log("Thanks for visiting! Come back when you have more time!");
      }
    });
}

function displayItems() {
  inquirer
    .prompt([
      {
        name: "itemId",
        message: "Please enter the item ID to be ordered",
        type: "input"
      },
      {
        name: "itemQuantity",
        message: "How many of these items would you like to purchase?",
        type: "input"
      }
    ])
    .then(function(userPurchase) {
      db.query(
        "SELECT * FROM products WHERE item_id=?",
        userPurchase.itemId,
        function(err, res) {
          for (var i = 0; i < res.length; i++) {
            if (userPurchase.itemQuantity > res[i].stock_quantity) {
              console.log(
                "Our apologies! We do not have enough stock to fulfill your order at this time. Please check back later! \n"
              );

              enterStorePrompt();
            } else {
              console.log(divider);
              console.log(
                "Got it! We are processing your order now... order CONFIRMED!"
              );
              console.log(divider);
              console.log("ORDER SUMMARY:");
              console.log("Item: " + res[i].product_name);
              console.log("Department: " + res[i].department_name);
              console.log("Price: " + res[i].price);
              console.log("Quantity: " + userPurchase.itemQuantity);
              console.log("Total: " + res[i].price * userPurchase.itemQuantity);
              var stockQty = res[i].stock_quantity - userPurchase.itemQuantity;
              db.query(
                "update products set stock_quantity = ? where item_id = ?",
                [stockQty, userPurchase.itemId],
                function(err, res) {
                  if (err) throw err;
                  console.log(
                    "THANK YOU FOR SHOPPING AT BAMAZON! You will receive a tracking number shortly!"
                  );
                  console.log(divider);
                }
              );
            }
          }
        }
      );
    });
}

function showItems() {
  console.log(
    divider + "WELCOME TO BAMAZON! HERE IS A LIST OF OUR NEWEST STOCK: "
  );

  var query = "SELECT * FROM products";

  db.query(query, function(err, res) {
    if (err) throw err;

    res.forEach(element => {
      var details = [
        "Item ID: " + element.item_id,
        "Product Name: " + element.product_name,
        "Department: " + element.department_name,
        "Price: $" + element.price,
        "Remaining Quantity: " + element.stock_quantity
      ].join(" | ");

      console.log("\n" + details);
      console.log(divider);
    });

    displayItems();
  });
}
