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
  
  
  function productItem() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
    //   console.log(res);
      
      var table = new Table({
        head: ['item_id', 'product_name',"price"],
        colWidths: [10,40, 20],
        style:{
          head:["yellow"],
          compact:true

      }


    });
    for(var i=0; i<res.length;i++){
        table.push([res[i].item_id,res[i].product_name,res[i].price])
    }
     console.log(table.toString());
     purchase();
    });
  }

function purchase(){ 
    inquirer.prompt({
        name:"brand",
        type:"input",
        message:"what would you like to buy from the item_id"
    }).then(function(answer1){ 
        var selection =answer1.brand;
        connection.query("SELECT * FROM products WHERE item_id = ?", selection, function(err,res){
            if (err) throw err;
            if (res.length === 0) {
                console.log('no product in store');
            }
            else{
                console.log(' all is ok')
            }
        });

    })

}