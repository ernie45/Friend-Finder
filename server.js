/** Declare the dependencies */
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 

/** Import the created dependencies */
var Friends = require("./app/data/friends");
var friends = Friends();
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

/**Create express app by allowing usage of the dependencies */
var app = express();
var PORT = process.env.PORT || 8080; 
app.use(bodyParser.urlencoded({extended: false}));   
app.use(bodyParser.json());
app.use(express.static("app/public"));
app.use(apiRoutes);

/** Listen to the port opening */
app.listen(8080, function(){
	console.log("listening on port " + PORT);
	console.log(friends.all);
});