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
let authorized = false;

function authIn() {
  inquirer
    .prompt([{ message: "Enter user:", type: "prompt", name: "user" }])
    .then(ansa => {
      inquirer
        .prompt([{ message: "Enter pass:", type: "password", name: "pass" }])
        .then(ansb => {
          // Send hashed password to DB

          connection.query(
            "SELECT pass FROM users WHERE user = ?",
            ansa.user,
            function(error, results) {
              if (error) throw error;

              bcrypt.compare(ansb.pass, results[0].pass, function(err, res) {
                if (err) throw err;
                if (res) {
                  authorized = true;
                  console.log("You're logged in!");
                  connection.end();
                } else {
                  console.log("Something didn't match. Try again!");
                  // connection.end();
                  authIn();
                }
              });
            }
          );
        });
    });
}

function createNewUser() {
  inquirer
    .prompt([{ message: "Enter new username:", type: "prompt", name: "user" }])
    .then(ans1 => {
      inquirer
        .prompt([{ message: "Enter pass:", type: "password", name: "pass" }])
        .then(ans2 => {
          inquirer
            .prompt([
              {
                message: "Re-enter pass:",
                type: "password",
                name: "passConfirm"
              }
            ])
            .then(ans3 => {
              if (ans2.pass === ans3.passConfirm) {
                bcrypt.hash(ans2.pass, saltRounds).then(function(hash) {
                  let userInfo = { user: ans1.user, pass: hash };
                  connection.query(
                    "INSERT INTO users SET ?",
                    userInfo,
                    function(error) {
                      if (error) throw error;

                      connection.end();
                    }
                  );
                });
              } else {
                console.log("Your passwords don't match. Try again");
                createNewUser();
              }
            });
        });
    });
}

// createNewUser();
authIn();
