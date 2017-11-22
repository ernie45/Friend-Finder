var express = require("express");
var bodyParser = require("body-parser");
var path = require("path"); 
var app = express();
var PORT = process.env.PORT || 3000; 
var Friends = require("./app/data/friends");
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");
app.use(bodyParser.urlencoded({extended: false}));   
app.use(bodyParser.json());
//app.use("/app") 
app.use(express.static("app/public"));
// app.use(apiRoutes);
var friends = Friends();
friends.add({ name: 'Ernesto', scores: 1, photo: 'http:/placehold.it/320x320' });
app.get("/api/friends", function(req, res){
	console.log(req.url);
	res.json(friends.all);
})
app.post("/api/friends", function(req, res){
	console.log(req.body);
	friends.add(req.body);
	res.json(friends.all);
});
app.listen(8080, function(){
	console.log(friends.all);
});