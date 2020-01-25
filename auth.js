const mysql = require("mysql");
const inquirer = require("inquirer");

// Connection to sql via mysql npm
var connection = mysql.createConnection({
  host: "localhost",
  user: "mpgelber",
  password: "",
  database: "platform"
});
connection.connect();

// Connection to bcrypt npm for hashing passwords
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

inquirer
  .prompt([{ message: "Enter user:", type: "prompt", name: "user" }])
  .then(ans => {
    inquirer
      .prompt([{ message: "Enter pass:", type: "password", name: "pass" }])
      .then(ans => {});
  });
