var Friend = require("./friend");
function Friends(){
	if (this instanceof Friends){
		this.all = []; 
	}
	else{
		return new Friends();
	}
};
Friends.prototype.add = function(body){
	this.all.push(new Friend(body.name, body.picture, body.scores));
};
Friends.prototype.getUsers = function(){
	return this.all;
};
Friends.prototype.match = function(){
	return this.all[0];
};
module.exports = Friends; 