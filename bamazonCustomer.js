var mysql = require("mysql");
var inquirer = require("inquirer");
const { table } = require("table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

var items = [
  [
    "\033[1;97;41mItem Id\033[00m",
    "\033[1;97;41mProduct Name\033[00m",
    "\033[1;97;41mDepartment\033[00m",
    "\033[1;97;41mPrice\033[00m",
    "\033[1;97;41mQuantity\033[00m"
  ]
];

inquirer
  .prompt([
    {
      type: "confirm",
      name: "welcome",
      message: "Welcome to Bamazon! Are you ready to shop?"
    }
  ])
  .then(answers => {
    if (answers.welcome) {
      connection.connect(function(err) {
        if (err) throw err;
        console.log("Below is a list of our available invetory");
        queryAllInventory();
      });
    } else
      console.log("We hope to see you again when you are ready to shop :)");
  });

function queryAllInventory() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      items.push([
        res[i].item_id,
        res[i].product_name,
        res[i].department_name,
        res[i].price,
        res[i].stock_quantity
      ]);
    }
    let data, output;
    data = items;
    output = table(data);
    console.log(output);
    buySomething();
  });
}

function buySomething() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Select the item you are interested in purchasing.",
        choices: [
          { value: 1, name: "Baby Yoda Funko Pop!" },
          { value: 2, name: "Playstation 5" },
          { value: 3, name: "Rumba Vacuum Cleaner" },
          { value: 4, name: "Hydro Flask Water Bottle" },
          { value: 5, name: "Michael Jackson Red Leather" },
          { value: 6, name: "LEGO: Star Wars" },
          { value: 7, name: "Gordon Ramsey Cookbook" },
          { value: 8, name: "Aveeno Daily Face Wash" },
          { value: 9, name: "Yankee Candle Large - Bahama Breeze" },
          { value: 10, name: "Orbit Gum - Spearmint (Pack of 5)" }
        ]
      },
      {
        type: "number",
        name: "quantity",
        message:
          "How many units of this product are you interested in purchasing?"
      }
    ])
    .then(answers => {
      if (answers.quantity <= items[answers.choice][4]) {
        console.log(
          `It's YOURS. You're total cost is $${items[answers.choice][3] *
            answers.quantity} \n\nOnce your payment is process, we will ship your item(s) out. Thank you for shopping with us!`
        );
      } else
        console.log(
          "Currently we do not have enough quantity of this product to fulfill your order. Please check again at another time for restock. \n \nWe apologize for the inconveninece. :("
        );
    });
}
