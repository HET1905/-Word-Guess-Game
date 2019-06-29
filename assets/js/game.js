var txtWin = document.getElementById("txtWin");
var txtGuessRemaining = document.getElementById("txtGuessRemaining");
var txtCurremtWord = document.getElementById("txtCurremtWord");
var txtGuessedLetters = document.getElementById("txtGuessedLetters");
var winDiv = document.getElementById("winDiv");
var win = 0;
var guessRemaining = 10;

var gussedLetters = [];
var wordsCollection = ["apple", "banana", "mango", "cherry", "kiwi"];
var answerArray = [];
var remainingLetters;

txtWin.innerHTML = win;
txtGuessRemaining.innerHTML = guessRemaining;

// Computer guess and printing desh -----------------------
var compGuess = wordsCollection[Math.floor(Math.random() * wordsCollection.length)];
remainingLetters = compGuess.length;
// alert(compGuess + "   - lentgth :" + remainingLetters);

function printDash(totalDash) {
    for (var i = 0; i < totalDash.length; i++) {
        answerArray[i] = "_";
    }
}
printDash(compGuess);
txtCurremtWord.innerHTML = answerArray.join("  ");

function functionRestart() {
    guessRemaining = 10;
    txtGuessRemaining.innerHTML = guessRemaining;
    gussedLetters = [];
    txtGuessedLetters.innerHTML = "";
    answerArray = [];
    txtCurremtWord.innerHTML = answerArray.join("  ");
    win = 0;
   
}
function fnPlay(){
    alert("inside fnplay");
    functionRestart();
    var compGuess = wordsCollection[Math.floor(Math.random() * wordsCollection.length)];
    remainingLetters = compGuess.length;
  //  alert(compGuess);
printDash(compGuess);
txtCurremtWord.innerHTML = answerArray.join("  ");
winDiv.innerHTML = "";
document.getElementById("guessImage").src ="assets/images/abc.png";


}

function displayPic(imgName) {
    
   
    switch (imgName) {
        case 'apple':
                document.getElementById("guessImage").src = "assets/images/apple.jfif";
            break;
        case 'banana':
                document.getElementById("guessImage").src = "assets/images/banana.jpg";
            break;
        case 'mango':
                document.getElementById("guessImage").src = "assets/images/mango.jpg";
            break;
        case 'cherry':
                document.getElementById("guessImage").src = "assets/images/cherry.jpg";
            break;
        case 'kiwi':
                document.getElementById("guessImage").src = "assets/images/kiwi.jpg";
            break;
        default:
                document.getElementById("guessImage").src = "assets/images/abc.png";
    }

}

// ---------To track the key pressed------------------------

document.onkeyup = function (event) {
    if (((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123)) && (guessRemaining > 0)) {
        // /[^A-Za-z\d]/(/[a-zA-Z]/.test(event.key))

        if (compGuess.indexOf(event.key) < 0) {

            if (guessRemaining == 0) {
                winDiv.innerHTML = "<h2>You Loose!!!</h2>"
                functionRestart();
            } else {
                gussedLetters.push(event.key);
                txtGuessedLetters.innerHTML = gussedLetters;
                guessRemaining = guessRemaining - 1;
                txtGuessRemaining.innerHTML = guessRemaining;
            }

        }
        for (var x = 0; x < compGuess.length; x++) {

            if (compGuess[x] === event.key) {
                answerArray[x] = event.key;
                txtCurremtWord.innerHTML = answerArray.join(" ");
                remainingLetters--;

            }
            if (remainingLetters == 0) {
                winDiv.innerHTML = "<h2>You Win</h2> " + "Word : " + compGuess;
                txtCurremtWord.innerHTML = answerArray.join(" ");
                win = win + 1;
                txtWin.innerHTML = win;
                displayPic(compGuess);
                functionRestart();
            }
            if(guessRemaining==0){
                winDiv.innerHTML = "<h2>You Loose!!!</h2>"
            }

        }
        // txtCurremtWord.innerHTML = answerArray.join(" ");
    } else {
        alert("Press only alphabets!!!!");
    }
}
