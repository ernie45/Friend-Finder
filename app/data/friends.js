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
	this.all.push(new Friend(body.name, body.photo, body.scores));
}
module.exports = Friends; 