var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var loss = 0;
var guessLeft = 9;
var userInput = new Array();
var compPick = letters[Math.floor(Math.random() * letters.length)];
alert("Press any letter to start")
console.log(compPick);


//Reset values userGuess array, guessLeft & compPick 
function resetValue() {
	userInput.length = 0;
	for (var i = userInput.length - 1; i >= 0; i--) {
		userInput.pop();
	}
//	console.log(userInput);
	guessLeft = 9;
	compPick = letters[Math.floor(Math.random() * letters.length)];
}

function updateScores() {
//	alert(userInput+guessLeft);
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = loss;
	document.getElementById("guessLeft").innerHTML = guessLeft;
	document.getElementById("userLetters").innerHTML = userInput;
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

	if (event.keyCode >= 65 && event.keyCode <=90) {
		// Determines which key was pressed.
	    var userGuess = event.key.toLowerCase();
		guessLeft--;
		userInput.push(userGuess);
	
    if (userGuess === compPick) {
    	wins++;
    	alert("You win. It is : " + userGuess); 
    	resetValue();
    	}
//    updateScores();

    if (guessLeft < 0) {
//    	updateScores();
    	loss++;
    	alert("Computer pick was : " + compPick);
    	resetValue();
    	}
    updateScores();
    }
    else {
    	alert("Enter letter between a-z");
    }
}
