//alert("JavaScript works!");
// Jessica Ohler
// SDI 1407
// Project 2
// Time Travel Journey

// 

//Set variables
var partnerName = "Jabba the Pug",
	expeditionPartner = true,
	friendCompanion = true
;
//Prompt finding out if user would like to travel with a companion.
myConfirmation = confirm("Would you like to time travel with an expedition partner today?");
if (expeditionPartner === true) {
	console.log("Let's decide who to pick!")
} else {
	console.log("Alright, let's get traveling alone!")
}

//Procedure which companion to travel with.
if (friendCompanion === true) {
	var friendCompanion = true,
		loverCompanion = false,
		nameLover = "Joie";
		
	console.log("We will travel with " + partnerName + ".")
	} else {
	console.log("We will travel with " + nameLover + ".")
};

//