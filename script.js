// Battle Game Project 04/23/2023 Dominick Vera

/* Simple text- based choose your own adventure game using HTML, CSS and JAVASCRIPT. Focusing on user input, logic, functions and events. */

// Add an event listener to the button element 
document.getElementById("button").addEventListener("click", startBattle);

// Definition of the startBattle() function which controlls the game itself 
function startBattle() {
	// Clear any old messages in the document from previous games
	document.getElementById("victory").textContent = "";
	document.getElementById("defeat").textContent = "";

	// Initial prompt for the user input that get stored in a variable 
	let action = window.prompt("You're walking through the forest minding your own business and a Dragon suddenly appears!\n\nDo you 'FIGHT' the dragon?\n\nDo you 'RUN' from the Dragon?\n\nDo you try to 'BRIBE' the Dragon?").toUpperCase();

	// Switch statement to handle the player's choice
	switch(action) {
		case "FIGHT": {
			fightBattle();
			break;
		} // End of case FIGHT

		case "RUN": {
			runBattle();
			break;
		}// end of case RUN

		case "BRIBE": {
			bribeBattle();
			break;
		} // end of case BRIBE

		default: {
			// the user has not entered a valid choice at the original prompt
			window.alert("You entered: " + action + ". That is not a valid choice! Please pick again!");
			startBattle();
			break;
		} // end of default case
	} // end of switch statment
}// End of startBattle() Function

// Definition of the fightBattle() function 
function fightBattle() {
	let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
	let strong = window.prompt("Are you a stronger then a dragon? (YES or NO)").toUpperCase();

	// IF statement that analyzes the responses
	if(skill === "YES" || strong === "YES") {
		// The user said YES to atleast one of the prompts
		document.getElementById("victory").innerHTML = "You can either be stronger or more skilled than a dragon to save the Princess.<br/>Victory is yours!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again?";
	} else {
		// The user did NOT respond YES to either option
		document.getElementById("defeat").innerHTML = "You are NOT skilled or strong enough!<br/> Why did you fight the Dragon?<br/>Now you're dead!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Hey loser wanna try Again?";
	} // End of Else statement
} // End of fightBattle() Function

// Definition of the runBattle() Function
function runBattle() {
	let fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
	if(fast === "YES") {
		document.getElementById("victory").innerHTML = "You have some real speed!<br/>But the Princess is MINE!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again Coward?";
	} else {
		document.getElementById("defeat").innerHTML = "If you're going to run atleast be faster then the dragon<br/>You are NOT that guy!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "Hey coward wanna try Again?";
	} // End of Else statement 
} // End of runBattle() Function

// Definition of the bribeBattle() Function
function bribeBattle() {
	let money = window.prompt("Do you have deep pockets?\n(YES or NO)").toUpperCase();
	if(money === "YES") {
		// Now ask if they have the correct amount
		let amount = window.prompt("How much is the Princess worth to you?\n Please enter a NUMERIC VALUE.");
		// Try to convert the input to an interger value
		amount = parseInt(amount);
		// Check the amount against our condition 
		if(amount > 100) {
			document.getElementById("victory").innerHTML = "You're cheap, But ill let it slide!<br/> GO to the Princess before I change my mind!";
		document.getElementById("win").play();
		document.getElementById("button").textContent = "Play Again Coward?";
		} else {
			// User had money just not enough 
			document.getElementById("defeat").innerHTML = "You've offended the dragon,<br/>RUN!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "HA you're broke? wanna try Again?";
		}// end of INNER IF/ELSE statement
	} else {
		// User said they didnt have money
		document.getElementById("defeat").innerHTML = "If you have no money,<br/>Take your broke self home!<br/>You and the Princess are DEAD!";
		document.getElementById("lose").play();
		document.getElementById("button").textContent = "HA you're broke lol wanna try Again?";
	} // End of Else statement
} // End of bribeBattle() Function
