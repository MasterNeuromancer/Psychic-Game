//Guess what letter I'm thinking of : Type out text in html. Must assign correct variables

var wins = 0;
var losses = 0;
var numberGuesses = 9;
//Wins: (# of times the user has guessed the letter correctly)

// Create array of possible computer choices

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



document.onkeyup = function (event) {

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var userGuess = event.key;

    console.log(computerChoice)

    // Function will be called when we reset everything
    var reset = function () {
        numberGuesses = 0;
        guessedLetters = [];
    }

    if (userGuess === computerChoice) {
        wins++;
        document.getElementById("wincounter").textContent = wins;
        document.getElementById("guesstracked").textContent = userGuess;
        document.getElementById("guesscounter").textContent = numberGuesses--;
    } else {
        losses++;
        document.getElementById("losscounter").textContent = losses;
        document.getElementById("guesstracked").textContent = userGuess;
        document.getElementById("guesscounter").textContent = numberGuesses--;
    }
    if (numberGuesses = 0) {
        reset();
    }
}
//Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
//Guesses Left: (# of guesses left. This will update)
//Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
//When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
//When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).