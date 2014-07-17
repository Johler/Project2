//alert("JavaScript works!");
// Jessica Ohler
// SDI 1407
// Project 2
// Time Travel Journey

//Set variables

var partnerName = "Jabba the Pug",
	expeditionPartner = true,
	friendCompanion = true,
	aliensHealth = 100
;

//Prompt: Finding out if user would like to travel with a companion.

myConfirmation = confirm("Would you like to time travel with an expedition partner today?");
if (expeditionPartner === true) {
	console.log("Let's decide who to pick!")
} else {
	console.log("Alright, let's get traveling alone!")
}

//Procedure: which companion to travel with.

if (friendCompanion === true) {
	var friendCompanion = true,
		loverCompanion = false,
		nameLover = "Joie";
		
	console.log("We will travel with " + partnerName + ".")
	} else {
	console.log("We will travel with " + nameLover + ".")
};

/*Boolean function:After landing on another planet in the year 25, an alien starts to 
	attack us for invading their space!  Jabba is going to protect us and defeat the alien! 
	It is a Boolean because the computer keeps checking until the statement 
	aliensHealth > 0 is true.
*/

while (aliensHealth > 0) {
	console.log ("His health is still at " + aliensHealth + "." + "  He's still alive and coming for us!");
	aliensHealth --;
};
	console.log("We've defeated the alien!");

/* Number Function with For Loop: Decided that was enough excitement with time traveling 
	and it was time to go home to the year 2000.  
*/
for (var yearTravelingTo = 25; yearTravelingTo < 2000; yearTravelingTo +=50){
	console.log("We are still traveling through " + yearTravelingTo + ".");
	yearTravelingFrom = 2000
	
};
console.log("We made it home safely to " + yearTravelingFrom + "!");

//String function with return string
var timeTravelAgain = function (offerYear) {
	var offerYear,
		notGoing = "No thank you, that era was not for me.",
		wouldLoveTo = "Are you ready now?"
		;
		if (offerYear > 25) {
			console.log(wouldLoveTo);
			offerYear = 15;
		} else {
		notGoing = "No thank you, that era was not for me.";
		}
};

		