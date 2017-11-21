function Friends(name, photo, scores){
	if (this instanceof Friends){
		this.name = name;
		this.photo = photo;
		this.scores = scores;
	}
	else{
		return new Friends(name, photo, scores);
	}
};
module.exports = Friends; 