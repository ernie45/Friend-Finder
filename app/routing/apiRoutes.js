var Friends = require("../data/friends");
var friends = Friends();
var express = require("express");
var router = express.Router(); 
var path = require("path");
router.get("/api/friends", function(req, res){
	console.log(req.url);
	res.json(friends.getUsers());
});
router.post("/api/friends", function(req, res){
	console.log(req.body);
	req.body.scores = req.body["scores[]"];
	friends.add(req.body);
	res.json(friends.match());
});
module.exports = router;