// Define an array of words to choose from
const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

// Choose a random word
let randomWord = words[Math.floor(Math.random() * words.length)];

// Track the current state of the game
let correctGuesses = Array(randomWord.length).fill(false);
let wrongGuesses = [];
let incorrectGuesses = 0;
let timeLeft = 60; // 1 minut i sekunder
let timerInterval;

// DOM elements
const wordDisplay = document.getElementById("word-display");
const wrongGuessesDisplay = document.getElementById("wrong-guesses");
const hangmanImage = document.querySelector(".hangman svg");
const resultText = document.getElementById("result-text");
const correctWordDisplay = document.getElementById("correct-word");
const playAgainButton = document.getElementById("play-again-button");

// Function to update the word display
function updateWordDisplay() {
    wordDisplay.innerHTML = "";
    for (let i = 0; i < randomWord.length; i++) {
        if (correctGuesses[i]) {
            wordDisplay.innerHTML += `<span>${randomWord[i]}</span>`;
        } else {
            wordDisplay.innerHTML += "<span>_</span>";
        }
        if (i < randomWord.length - 1) {
            wordDisplay.innerHTML += " "; // Lägg till ett mellanrum om vi inte är på den sista bokstaven
        }
    }
}
// Function to handle a guess
function makeGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toLowerCase();

    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
        alert("Please enter a single letter.");
        guessInput.value = "";
        return;
    }

    if (correctGuesses.includes(guess) || wrongGuesses.includes(guess)) {
        alert("You've already guessed that letter.");
    } else if (randomWord.includes(guess)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === guess) {
                correctGuesses[i] = true;
            }
        }
        updateWordDisplay();
    } else {
        wrongGuesses.push(guess);
        incorrectGuesses++;
        wrongGuessesDisplay.innerHTML = wrongGuesses.join(", ");
        handleIncorrectGuess();
        updateHangman();
        
    }

    guessInput.value = "";

    if (incorrectGuesses >= 6) {
        endGame(false);
    } else if (!correctGuesses.includes(false)) {
        endGame(true);
    }
}

// Function to update the hangman image
function updateHangman() {
    hangmanImage.src = `./img/hangman${incorrectGuesses}.svg`;
}

// Använd denna funktion när användaren gissar fel
function handleIncorrectGuess() {
    // Öka antalet felgissningar

// Här är en enkel logik för att visa respektive del av bilden när användaren gissar fel
    if (incorrectGuesses === 1) {
        document.getElementById("ground").style.display = "block";
    } else if (incorrectGuesses === 2) {
        document.getElementById("scaffold").style.display = "block";
    } else if (incorrectGuesses === 3) {
        document.getElementById("head").style.display = "block";
    } else if (incorrectGuesses === 4) {
        document.getElementById("body").style.display = "block";
    } else if (incorrectGuesses === 5) {
        document.getElementById("arms").style.display = "block";
    } else if (incorrectGuesses === 6) {
        document.getElementById("legs").style.display = "block";
        // Användaren har förlorat
        // Visa förlorad meddelande eller hantera spelet som du önskar
    }
}

// Function to end the game and show the result
function endGame(isWinner) {
    playAgainButton.style.display = "block";
    if (isWinner) {
        resultText.textContent = "You won!";
    } else {
        resultText.textContent = "You lost!";
        correctWordDisplay.textContent = `The correct word was: ${randomWord}`;
    }
}

// Event listeners
const guessButton = document.getElementById("guess-button");
guessButton.addEventListener("click", makeGuess);


playAgainButton.addEventListener("click", () => {
    randomWord = words[Math.floor(Math.random() * words.length)];
    correctGuesses = Array(randomWord.length).fill(false);
    wrongGuesses = [];
    incorrectGuesses = 0;
    wrongGuessesDisplay.innerHTML = "";
    updateWordDisplay();
    updateHangman();
    resultText.textContent = "";
    correctWordDisplay.textContent = "";
    playAgainButton.style.display = "none";
    resetTimer();
});

function startTimer() {
    timerInterval = setInterval(function() {
        if (timeLeft <= 0) {
            // Tiden har tagit slut, användaren förlorar
            clearInterval(timerInterval);
            // Lägg till din logik för förlust här
        } else {
            // Konvertera tiden till formatet mm:ss
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // Uppdatera visningen av tiden
            document.getElementById("timer").textContent = timeString;

            // Minska tiden med 1 sekund
            timeLeft--;
        }
    }, 1000); // Uppdatera varje sekund
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 60; // Återställ till 1 minut
    startTimer(); // Starta om timern
}




// Initialize the game
updateWordDisplay();

// Starta timern när spelet börjar
resetTimer();
startTimer();