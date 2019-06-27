var txtWin = document.getElementById("txtWin");
var txtGuessRemaining = document.getElementById("txtGuessRemaining");
var txtCurremtWord = document.getElementById("txtCurremtWord");
var txtGuessedLetters = document.getElementById("txtGuessedLetters");

var win = 0;
var guessRemaining = 10;

var gussedLetters = [];
var wordsCollection = ["apple", "banana", "mango","cherry","kiwi"];
var answerArray = [];
var remainingLetters;

txtWin.innerHTML = win;
txtGuessRemaining.innerHTML = guessRemaining;

// Computer guess and printing desh -----------------------
var compGuess = wordsCollection[Math.floor(Math.random() * wordsCollection.length)];
remainingLetters = compGuess.length;
alert(compGuess + "   - lentgth :" + remainingLetters);

for (var i = 0; i < compGuess.length; i++) {
    answerArray[i] = "_";
}
txtCurremtWord.innerHTML = answerArray.join("  ");
// ---------To track the key pressed------------------------

document.onkeyup = function (event) {
    if(compGuess.indexOf(event.key)<0){
        alert("Guess Key : " + event.key)
        gussedLetters.push(event.key);
        txtGuessedLetters.innerHTML = gussedLetters;
        guessRemaining = guessRemaining -1;
        txtGuessRemaining.innerHTML = guessRemaining;
    }
    for(var x = 0; x<compGuess.length; x++){
        if(compGuess[x]===event.key){
            answerArray[x] = event.key;

            // alert("Same : " + x + " Key is " +  event.key)
        }
        
    }
    
    txtCurremtWord.innerHTML = answerArray.join(" ");
    
}
