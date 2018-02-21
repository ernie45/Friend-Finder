/** Import the dependencies */
var Friends = require("../data/friends");
var friends = Friends();
var express = require("express");
var router = express.Router(); 
var path = require("path");

/** Routing to the api */
router.get("/api/friendslist", function(req, res){
	/** Show all the users */
	res.json(friends.getAllUsers());
});
/** Posting to the api */
router.post("/api/friends", function(req, res){
	/** Capture data passed into the post request */
	name = req.body.name;
	picture = req.body.picture;
	scores = req.body["scores[]"];
	console.log(name + " " + picture + " " + scores);
	friends.addFriend({name: name, picture: picture, scores: scores});
});

/** Export the router */
module.exports = router;