// npm install mysql
var mysql = require("mysql");
//npm install inquirer
var inquirer = require("inquirer");
//npm i cli-table3
var Table = require('cli-table3');
// creating node and sql connection
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Satins123@",
    database: "bAmazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
     productItem();
  });
  