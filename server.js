var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path"); 
var PORT = process.env.PORT || 3000; 
var Friends = require("./app/data/friends");
var friends = Friends();
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");
app.use(bodyParser.urlencoded({extended: false}));   
app.use(bodyParser.json());
app.use(express.static("app/public"));
app.use(apiRoutes);
app.listen(8080, function(){
	console.log(friends.all);
});