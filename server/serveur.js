var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
app.use("/", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "log1.fr",
    user: "pitch",
    password: "Chocolat11"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', function(req, res) {


});

http.listen(3000, function(){
    console.log('Server is listening on 3000');
});
