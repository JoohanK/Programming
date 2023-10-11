// Ordlängd
const wordLength = 5;

// Lista över ord att välja från
const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

// Välj ett slumpmässigt ord från listan
const randomWord = words[Math.floor(Math.random() * words.length)];

// Dölj det valda ordet
const hiddenWord = "_".repeat(wordLength);

// Håll reda på felaktiga gissningar
let wrongGuesses = 0;
const maxWrongGuesses = 6;

// DOM-element
const wordDisplay = document.querySelector("aside p");
const guessInput = document.getElementById("guess-input");
const hangmanImage = document.querySelector("figure img");

// Visa det initiala skickliga ordet
wordDisplay.textContent = hiddenWord;

// Lyssna på gissningar
guessInput.addEventListener("input", (event) => {
  const guess = event.target.value.toLowerCase();

  if (guess.length !== 1 || !/[a-z]/.test(guess)) {
    alert("Ange en enda bokstav.");
    event.target.value = "";
    return;
  }

  if (randomWord.includes(guess)) {
    // Gissningen är korrekt
    let newHiddenWord = "";
    for (let i = 0; i < wordLength; i++) {
      if (randomWord[i] === guess) {
        newHiddenWord += guess;
      } else {
        newHiddenWord += hiddenWord[i];
      }
    }
    hiddenWord = newHiddenWord;
    wordDisplay.textContent = hiddenWord;

    // Kolla om spelaren har vunnit
    if (hiddenWord === randomWord) {
      alert("Grattis, du vann!");
    }
  } else {
    // Gissningen är fel
    wrongGuesses++;

    // Uppdatera hänga gubben beroende på felaktiga gissningar
    hangmanImage.src = `/H-nga-gubbe/img/hangman${wrongGuesses}.svg`;

    // Kolla om spelaren har förlorat
    if (wrongGuesses === maxWrongGuesses) {
      alert("Du har förlorat. Det rätta ordet var: " + randomWord);
    }
  }

  // Återställ inmatningsfältet
  event.target.value = "";
});