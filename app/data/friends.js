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
Friends.prototype.add = function(body){
	this.all.push(new Friend(body.name, body.picture, body.scores));
};

/** Allow access to all the users in the object database */
Friends.prototype.getUsers = function(){
	return this.all;
};

/** Match the user to the appropriate match */
Friends.prototype.match = function(){
	return this.all[0];
};

/** Export the Friends object along with all its new methods */
module.exports = Friends; 