
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
const resultText = document.getElementById("result-text");
const correctWordDisplay = document.getElementById("correct-word");
const playAgainButton = document.getElementById("play-again-button");



// Starta timern när spelet börjar
// ev skapa en startknapp som triggas av klick??
//ändring

updateWordDisplay(); // startar spelet
// Function to update the word display
function updateWordDisplay() {
    wordDisplay.innerHTML = "";
    for (let i = 0; i < randomWord.length; i++) {
        if (correctGuesses[i]) {
            wordDisplay.innerHTML += `${randomWord[i]}`;
        } else {
            wordDisplay.innerHTML += " _ ";
        }
    
    }
}

startTimer();

// Eventlistener: trycka enter för att gissa på en bokstav

const guessInput = document.getElementById("guess-input");
guessInput.addEventListener("keydown",(event) => {
    if(event.key === "Enter"){makeGuess()}})


// Funktion för hantering av gissningar.
//Skapa en funktion som är enbart för varningar när man gör fel
function makeGuess() {
    const guessInput = document.getElementById("guess-input");
    const guess = guessInput.value.toLowerCase();
          
            //Varningar som säger instruerar användaren att den gjort "fel"
    if (!/[a-z]/.test(guess)) {
        alert("Please enter a single letter.");
        guessInput.value = "";
        return;
    }

     // Använd en flagga för att kontrollera om bokstaven redan har gissats
     let alreadyGuessed = false;
        //correctguess om man tar samma igen funkar ej
    if (correctGuesses.includes(guess) || wrongGuesses.includes(guess)) {
        alreadyGuessed = true;
    } else if (randomWord.includes(guess)) {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === guess) {
                if (!correctGuesses[i]){
                correctGuesses[i] = true;
                updateWordDisplay();
            }
            else{
                alreadyGuessed = true;
                }
            }
        }
    } else {
        wrongGuesses.push(guess);
        incorrectGuesses++;
        wrongGuessesDisplay.innerHTML = wrongGuesses.join(", ");
        updateHangman();
        
    }

    if (alreadyGuessed) {
        alert("You've already guessed that letter.")
    }

    guessInput.value = "";

    if (incorrectGuesses >= 6) {
        endGame(false);
    } else if (!correctGuesses.includes(false)) {
        endGame(true);
    }
}


// Funktion för att uppdatera bilden när användaren gissar fel.
// Skulle ev kunna göras om till en switch.

function updateHangman() {
    switch (incorrectGuesses) {
        case 1:
            document.getElementById("ground").style.display = "block";
            break;
        case 2:
            document.getElementById("scaffold").style.display = "block";
            break;
        case 3:
            document.getElementById("head").style.display = "block";
            break;
        case 4:
            document.getElementById("body").style.display = "block";
            break;
        case 5:
            document.getElementById("arms").style.display = "block";
            break;
        case 6:
            document.getElementById("legs").style.display = "block";
            // Användaren har förlorat
            // Visa förlorad meddelande eller hantera spelet som du önskar
            break;
        default:
            // Om incorrectGuesses inte matchar något av de ovanstående fallen
            break;
    }
}

// Funktion för att avsluta spelet och visa resultatet
let hideEndOFGame = document.querySelector(".container")
let showTitle = document.querySelector(".result")
// När du förlorar (till exempel i din `endGame`-funktion)
const loseImg = document.getElementById("loseImg");
const winImg = document.getElementById("winImg")

function endGame(isWinner) {
   
    const winSound = document.getElementById("winSound");
    const loseSound = document.getElementById("loseSound");
    const winSound2 = document.getElementById("winSound2");
    const loseSound2 = document.getElementById("loseSound2");
    
    if (isWinner) {
        resultText.textContent = "You won!";
        hideEndOFGame.style.display = "none";
        showTitle.style.display = "block";
        correctWordDisplay.textContent = `Congratulations you are the best!`;
        // Spela vinnarljudet
        winSound.play();
        winSound2.play();
        winImg.classList.remove("hiddenTillWin")
        stopTimer();
        
    } else {
        resultText.textContent = "You lost!";
        hideEndOFGame.style.display = "none";
        correctWordDisplay.innerHTML = `The correct word was: <span> ${randomWord} </span> `;
        showTitle.style.display = "block";
        // Spela förlustljudet
        loseSound.play();
        loseSound2.play();
        loseImg.classList.remove("hiddenTillLose");
        stopTimer();
        
        
        
    }
}



// Eventlistener som gör en Page reload vid tryck på playagain-knappen
playAgainButton.addEventListener("click",() => 
{window.location.reload()})

// Gör att man kan trycka Enter för att köra playagian. Man måste alltså inte klicka. Båda funkar
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && showTitle.style.display === "block") {
        // Kontrollera om inmatningsrutan är fokuserad
        if (document.activeElement !== guessInput) {
            window.location.reload();
        }
    }
});


// Event listeners för den tidigare gissningknappen. Just nu bortkommenterad i html.
/* const guessButton = document.getElementById("guess-button");
guessButton.addEventListener("click", makeGuess); */


// Eventlistener som gör en Page reload vid tryck på playagain-knappen
playAgainButton.addEventListener("click",() => 
{window.location.reload()})




//Funktion för att starta timer
function startTimer() {
    timerInterval = setInterval(function() {
        if (timeLeft <= 0) {
            // Tiden har tagit slut, användaren förlorar
            clearInterval(timerInterval);
            endGame();
            // Lägg till din logik för förlust här
        } else {
            // Konvertera tiden till formatet mm:ss
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft  %60;
            const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // Uppdatera visningen av tiden
            document.getElementById("timer").textContent = timeString;

            // Minska tiden med 1 sekund
            timeLeft--;
        }
    }, 1000); // Uppdatera varje sekund
}

function stopTimer() {
    clearInterval(timerInterval);
}

//Funktion för att återställa timer. Starta den igen.





