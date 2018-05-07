var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
var mysql = require("mysql");
var port = process.env.PORT || 8080;

//var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'peepsandpets_db'
});
 
connection.connect();


app.listen(port, function(e){
    if(e) throw e;
    console.log("Server started @ " + port);
})