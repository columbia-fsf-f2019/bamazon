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

function authIn() {
  inquirer
    .prompt([{ message: "Enter user:", type: "prompt", name: "user" }])
    .then(ans => {
      inquirer
        .prompt([{ message: "Enter pass:", type: "password", name: "pass" }])
        .then(ans => {
          bcrypt.hash(ans.pass, saltRounds).then(function(hash) {
            // Send hashed password to DB
          });
        });
    });
}

function createNewUser() {
  inquirer
    .prompt([{ message: "Enter new username:", type: "prompt", name: "user" }])
    .then(ans => {
      inquirer
        .prompt([{ message: "Enter pass:", type: "password", name: "pass" }])
        .then(ans => {
          inquirer
            .prompt([
              {
                message: "Re-enter pass:",
                type: "password",
                name: "passConfirm"
              }
            ])
            .then(ans => {
              if (ans.pass === ans.passConfirm) {
                bcrypt.hash(ans.pass, saltRounds).then(function(hash) {
                  let userInfo = { user: ans.user, pass: hash };
                  connection.query(
                    "INSERT INTO users SET ?",
                    userInfo,
                    function(error) {
                      if (error) throw error;
                      console.log("Your user has been created!");
                    }
                  );
                });
              }
            });
        });
    });
}

createNewUser();
