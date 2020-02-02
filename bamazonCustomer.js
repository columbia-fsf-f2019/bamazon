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
    var items = [
      [
        "\033[1;97;41mItem Id\033[00m",
        "\033[1;97;41mProduct Name\033[00m",
        "\033[1;97;41mDepartment\033[00m",
        "\033[1;97;41mPrice\033[00m",
        "\033[1;97;41mQuantity\033[00m"
      ]
    ];
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
  inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Select the item you are interested in purchasing.",
      choices: [
        "Baby Yoda Funko Pop!",
        "Playstation 5",
        "Rumba Vacuum Cleaner",
        "Hydro Flask Water Bottle",
        "Michael Jackson Red Leather",
        "LEGO: Star Wars",
        "Gordon Ramsey Cookbook",
        "Aveeno Daily Face Wash",
        "Yankee Candle Large - Bahama Breeze",
        "Orbit Gum - Spearmint (Pack of 5)"
      ]
    },
    {
      type: "number",
      name: "quantity",
      message:
        "How many units of this product are you interested in purchasing?"
    }
  ]);
}
