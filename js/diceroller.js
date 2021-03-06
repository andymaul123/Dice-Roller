// Prevent button spamming

var isButtonPressed = false;

// Master function that is called by the button
// Checks if we've pressed a button
// Set button to pressed
// Creates variable for the type of dice based off diceID parameter
// Creates variable for the max number based off diceID parameter
// Adds the spinPoly class
// Runs showSide once spinPoly is done animating

var masterRoller = function(diceID) {
    if (isButtonPressed === false) {
    isButtonPressed = true;
    shapeID = "shape" + diceID;
    animationID = "animation" + diceID;
    maxNumber = diceID.substring(diceID.indexOf('D')+1);
    document.getElementById(shapeID).classList.add(animationID);
    document.getElementById(shapeID).addEventListener('webkitAnimationEnd', showSide, false);
    }
};

// Function that determines which side of the dice to show
// Removes spinPoly so the object only has one class (face)
// Creates variable based on object's current class (face)
// Runs randomRoll to get random number
// Creates variable for face to be shown
// Removes object's current class (face)
// Adds new class based off the roll (currently showing face)
// Resets our button so process can be repeated

var showSide = function() {
    document.getElementById(shapeID).classList.remove(animationID);
    currentClass = document.getElementById(shapeID).className;
    randomRoll(1,maxNumber);
    sideID = "show-side" + random;
    document.getElementById(shapeID).classList.remove(currentClass);
    document.getElementById(shapeID).classList.add(sideID);
    isButtonPressed = false;
}

// Function to randomly select number

var randomRoll = function(min, max) {
    random = Math.floor(Math.random()*(max-min+1)+min);
};




