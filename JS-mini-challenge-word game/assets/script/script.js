var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];



//start timer

function startTime(){
    timerCount = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount

if(timerCount ---0) {
    timerElement.textContent = "Time's Up!";
    clearInterval(timer)
    timerCount = 10;
}

},1000)

}

//select word

function selectWord() {
    selection=Math.randon(7)
    console.log(words[selection])
}


//track keystrokes if letter is contained in chosen word


// if word is completed before time is up show win or lose



document.addEventListener("keydown", function(event) {
 
});


startButton.addEventListener("click", startGame);