var express = require("express");
var path = require("path");
var app = express();
app.get("/api/friends", function(req, res){
	for (var i = 0; i < res.friends.length; i++){
		return res.json(res.fiends[i]); 
	}
});
app.post("/api/friends", function(req, res){
	
});