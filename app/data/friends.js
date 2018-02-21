/** Pull in the friend object */
var Friend = require("./friend");

/** Create a list of friends to match to */
function Friends(){
	if (this instanceof Friends){
		this.all = []; 
	}
	else{
		return new Friends();
	}
};

/** Inherit the add function, which allows pushing of a new friend object to the imaginary database */
Friends.prototype.addFriend = function(body){
	this.all.push(new Friend(body.name, body.picture, body.scores));
};


/** Allow access to all the users in the object database */
Friends.prototype.getAllUsers = function(){
	/** Return the array of objects (all) found inside the Friends object */
	return this.all;
};

/** Find an appropriate match for the user */
Friends.prototype.match = function(){
	/** Return the user's match */
	return this.all[0];
};

/** Export the Friends object along with all its new methods */
module.exports = Friends; 