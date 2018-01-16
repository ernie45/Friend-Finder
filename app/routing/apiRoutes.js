/** Import the dependencies */
var Friends = require("../data/friends");
var friends = Friends();
var express = require("express");
var router = express.Router(); 
var path = require("path");

/** Routing to the api */
router.get("/api/friends", function(req, res){
	/** Show all the users */
	res.json(friends.getUsers());
});
/** Posting to the api */
router.post("/api/friends", function(req, res){
	req.body.scores = req.body["scores[]"];
	friends.add(req.body);
	/** Render a json with the match to the friend */
	res.json(friends.match());
});

/** Export the router */
module.exports = router;