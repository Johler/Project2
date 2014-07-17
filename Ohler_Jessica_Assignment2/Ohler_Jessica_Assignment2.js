//alert("JavaScript works!");
// Jessica Ohler
// SDI 1407
// Project 2
// Time Travel Journey

// 

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

/*Boolean function:After landing on another planet, an alien starts to attack us for invading their space!

*/
while (aliensHealth > 0) {
	console.log ("His health is still at " + aliensHealth + "." + "  He's still alive and coming for us!");
	aliensHealth --;
};
	console.log("We defeated the alien!");

