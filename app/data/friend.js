function Friend(name, photo, scores){
	if (this instanceof Friend){
		this.name = name;
		this.photo = photo;
		this.scores = scores;
	}
	else{
		return new Friend(name, photo, scores);
	}
};
module.exports = Friend;