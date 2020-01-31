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
  database: "bamazon2_db;"
});

// connect to the mysql server and sql database
db.connect(function(err) {
  if (err) throw err;
  enterStorePrompt()

});

// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.

// function to handle an order asking for item id and qty desired
function enterStorePrompt() {
    
  // shows customer all the items available for purchase
  inquirer.prompt([
    {
      name: "enter",
      message: "Welcome to Bamazon! Can I help you find something?",
      type: "confirm",
      default: true,

      // options: [
      //     "Yes you may, thank you!",
      //     "Not today, I'm late for a meeting."
      // ]
      
    }
  ]).then(function(customer) {
    if (customer.enter ===true) {
      itemsList();
    } else {
      console.log("Thanks for visiting Bamazon, come back soon!");
      enterStorePrompt();
    }
  });
}
function displayItems() {


}
    }
  })

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

  function showItems() {

    console.log(divider + "WELCOME TO BAMAZON! THESE ARE TODAY'S SPECIALS: ");


    var query = "SELECT * FROM products"

    db.query(query, function (err,res) {
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


    });
    console.log(divider)
   
})
  }
enterStorePrompt()

 




