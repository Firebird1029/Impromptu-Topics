Array.prototype.getRandom = function () {
	return this[Math.floor(Math.random() * this.length)];
}

var alreadySelected, current;

var topics = [
	"My biggest concern for the future is...","Real wealth is never measured in money or possessions.",
	"Conservation is survival.","Real love is not the stuff of pop songs.",
	"If I were an animal I'd be a...","Plants have feelings too.",
	"Junk food's popularity relies on marketing.","To err is human. To forgive is divine. Discuss.",
	"The world is a smaller place these days.","The more we communicate, the less we really say.",
	"When I grow up...","To be grown up is a state of mind.",
	"Goals are good for you.","The most important lesson of my life so far...",
	"Intelligence is not enough.","If I ruled the world...",
	"Color affects the way people feel.","Ill health begins in the mind.",
	"Team sports build strong individuals.","Laughter is the best medicine.",
	"Fools and their money are easily parted.","Discipline is not a dirty word.",
	"Beauty is always in the eye of the beholder.","Children learn what they live with.",
	"Poverty is a state of mind.","What characteristics make an ideal hero and why?",
	"What and who is an average person?","Being young is over-rated.",
	"In what situation is lying a good idea?","Does money make the world go round?",
	"What human quality do we need more of and why?","Who has been the most influential person in your life and why?",
	"How we look is unimportant. It's who we are on the inside that counts.","Fashion victims I have known.",
	"Pets are for people who don't have children.","Summer is the best and worst of times. Why?",
	"The media controls how and what we think.","Advertising targeting children is immoral.",
	"Talking to someone and talking with someone are two different activities.","Real learning doesn't occur in a classroom.",
	"What would you rather be - wise or intelligent?","True wisdom comes from experience.",
	"A sense of humor is essential.","Uniforms stifle individuality.",
	"What is normal is decided by the society we live in.","Manners matter.",
	"Children should not watch television.","Art is essential to life.",
	"Cities are for people not cars.","Peace is possible."
]

$("button").click(function () {
	$("#output").empty();
	alreadySelected = [];
	current = null;

	for (var i = 0; i < 3; i++) {
		current = topics.getRandom();
		while (alreadySelected.indexOf(current) > -1) {
			current = topics.getRandom();
		}

		$("#output").append(current + "<br><br>");

		alreadySelected.push(current);
	};
})