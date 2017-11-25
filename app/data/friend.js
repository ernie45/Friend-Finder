function Friend(name, picture, scores){
	if (this instanceof Friend){
		this.name = name;
		this.picture = picture;
		this.scores = scores;
	}
	else{
		return new Friend(name, picture, scores);
	}
};
module.exports = Friend;