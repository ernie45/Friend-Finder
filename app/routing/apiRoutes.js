var express = require("express");
var router = express.Router(); 
var path = require("path");
router.get("/api/friends", function(req, res){
	for (var i = 0; i < res.friends.length; i++){
		return res.json(res.fiends[i]); 
	}
});
router.post("/api/friends", function(req, res){
	//create a new friend
});
module.exports = router;