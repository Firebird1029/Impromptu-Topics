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
	"Cities are for people not cars.","Peace is possible.",

	"My biggest concern for the future is…",
	"If I were an animal, I would be a…",
	"Saying “um” is one of the worst things you can do in public speaking.",
	"Advice for Little Red Riding Hood",
	"Cities are for people, not cars.",
	"Children should watch less/no television.",
	"Why are manners important?",
	"Uniforms smother individuality.",
	"Why is a sense of humor important?",
	"“Normal” is decided by society.",
	"Real learning happens outside the classroom.",
	"Wisdom vs. intelligence",
	"Talking to someone vs. talking with someone",
	"Advertisements targeted to children immoral.",
	"Pets are for people without children",
	"What human quality do we need more of?",
	"When is lying a good idea?",
	"If I ruled the world…",
	"The effects of color on people",
	"Poor health begins in the mind.",
	"Beauty is in the eye of the beholder.",
	"Poverty is a state of mind.",
	"Is it really that great being young?",
	"One thing that I would impress someone with is…",
	"High salaries of athletes, actors, etc.",
	"My most vivid memory from the past year",
	"My favorite of the five senses",
	"If I were the opposite sex/president/an author/rich, I would…",
	"If I had a mission statement",
	"People often stereotype…",
	"Why do teenagers smoke?",
	"You’re the prey (ant, gazelle, etc.) – convince the predator (anteater, lion, etc.) to not eat you.",
	"A favorite nickname of yours",
	"Three uses for a product other than its intended use (pencil, cup, scissors, etc.)",
	"If you were a salesperson, sell the audience a piece of your clothing.",
	"The most difficult thing I’ve ever done",
	"My best job ever",
	"Explain the rules to your favorite game.",
	"Which came first: the chicken or the egg?",
	"How to make a pizza",
	"How to make your favorite meal",
	"How to be a beekeeper",
	"Ghosts you’d like to meet",
	"The morality of zoos",
	"Dogs are better than cats (or vice versa)",
	"Discuss your favorite movie, book, etc.",
	"Your first memory",
	"Real vs. fake Christmas trees",
	"Bottles vs. cans",
	"Should smoking be allowed in public spaces?",
	"Review the last movie you saw.",
	"Your favorite hybrid animals",
	"Speed dating",
	"The most successful person you know",
	"How to buy a car",
	"Your favorite smart phone app",
	"How to become a comedian",
	"Violence on TV",
	"Uniforms in school",
	"Three things you do well"
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