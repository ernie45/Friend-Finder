/** Creat the friend object */
function Friend(name, picture, scores){
	/** Allows creation of new object without the new keyword */
	if (this instanceof Friend){
		this.name = name;
		this.picture = picture;
		this.scores = scores;
	}
	else{
		return new Friend(name, picture, scores);
	}
};
/** Export the object */
module.exports = Friend;