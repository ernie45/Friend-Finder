var Friends = require("../data/friends");
var friends = Friends;
var express = require("express");
var router = express.Router(); 
var path = require("path");
router.get("/api/friends", function(req, res){
	return res.json(friends.all);
});
router.post("/api/friends", function(req, res){
	friends.add(req.body); 
});
module.exports = router;