var mysql = require("mysql");
var inquirer = require("inquirer");
var divider = "\n--------------------------------------\n";

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

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// function to handle an order asking for item id and qty desired
function enterStorePrompt(hasAlreadyOrdered) {
  // shows customer all the items available for purchase
  inquirer
    .prompt([
      {
        name: "enter",
        message: "Welcome to Bamazon! Can I help you find something?",
        type: "confirm"
        // default: true

        // options: [
        //     "Yes you may, thank you!",
        //     "Not today, I'm late for a meeting."
        // ]
      }
    ])
    .then(function(customer) {
      if (customer.enter === true) {
        showItems();
      } else {
        if (hasAlreadyOrdered){
          console.log("Thanks for visiting, come back again soon!");
        
        } else {
        console.log(
          "Thanks for visiting Bamazon, come back after your meeting!"
        );
        // enterStorePrompt();
      }
      }
    });
}

// displayItems()

function displayItems() {
  // console.log(divider + "ALL ITEMS IN THE BAMAZON STORE: ")

  // showItems();

  inquirer
    .prompt([
      {
        name: "inputId",
        message: "Please enter the item ID to be ordered",
        type: "input"
      },
      {
        name: "inputQuantity",
        message: "How many of these items would you like to purchase?",
        type: "input"
      }

      // INSERT INTO products (product_name, department_name, price, stock_quantity)
    ])
    .then(function(userPurchase) {
      db.query(
        "SELECT * FROM products WHERE item_id=?",
        userPurchase.inputId,
        function(err, res) {
          for (var i = 0; i < res.length; i++) {
            if (userPurchase.inputQuantity > res[i].stock_quantity) {
              console.log(
                "Unfortunately, we do not have enough stock to fulfill your order at this time. Try again."
              );
              enterStorePrompt();
            } else {
              var stockQty = res[i].stock_quantity - userPurchase.inputQuantity;
              db.query(
                "update products set stock_quantity = ? where item_id = ?",
                [stockQty, userPurchase.inputId],
                function(err, res) {
                  if (err) throw err;
                  console.log(
                    "Success! We will be sending your tracking number shortly!"
                  
                  );
                  enterStorePrompt(true);
                }
              );

              //   .then(answers => {
              //     switch (answers.start) {
              //         case "Yes you may, thank you!":
              //             console.log("Entering the store...");
              //             showItems();
              //             break;
              //         case "Not today, I'm late for a meeting.":
              //             console.log(divider + "Come back soon!");
              //             db.end();
              //             break;
              //     }
              // });
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
// enterStorePrompt();
