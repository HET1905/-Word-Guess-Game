var txtWin = document.getElementById("txtWin");
var txtGuessRemaining = document.getElementById("txtGuessRemaining");
var txtCurremtWord = document.getElementById("txtCurremtWord");
var txtGuessedLetters = document.getElementById("txtGuessedLetters");

var win = 0;
var guessRemaining = 10;
var currentWord = [];
var gussedLetters = [];
var words = ["apple", "banana", "mango"];

var resultWord;

txtWin.innerHTML = win;
txtGuessRemaining.innerHTML = guessRemaining;

// Computer guess and printing desh -----------------------
var compGuess = words[Math.floor(Math.random() * words.length)];
alert(compGuess);
resultWord = new Array(compGuess.length + 1).join(' ___ ').split(' ');
// This print dash
resultWord.forEach(function(entry){
    txtCurremtWord.innerHTML += "  " +  entry;
})
// ---------To track the key pressed------------------------
document.onkeyup = function (event) {
    var enteredKey = event.key.toLowerCase();

        
    
      if(compGuess.indexOf(enteredKey)>=0){
            for(var i=0; i<resultWord.length;i++){
                resultWord.charAt(i) = enteredKey;
                txtCurremtWord.innerHTML += resultWord[i];
                currentWord.push(event.key);
                //txtCurremtWord.innerHTML = currentWord.toString();
            }
                
            }else{
                gussedLetters.push(enteredKey);
            txtGuessedLetters.innerHTML = gussedLetters.toString();
            }

            
            


}