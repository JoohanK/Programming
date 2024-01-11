/**
 * 1. Hämta alla kort och sätt en eventlistener på varje kort
 * 2. När jag klickar på ett kort så sätt klassen flip och spara undan kortet
 * 3. Om jag har klickat på två kortet så hämta data-card och jämför värden
 *   a. Om samma öka hittade par med 1
 *   b. Annars ta bort klassen flip från både korten
 * 4. Om antal hittade par är 8 så visa att man vann
 */

const memoryCards: NodeListOf<Element> =
  document.querySelectorAll(".memory-card");
let pickedCards: HTMLElement[] = [];
let foundPairs: number = 0;
const overlayElem: HTMLElement | null = document.querySelector(".overlay");

function flipBackCards(): void {
  setTimeout(() => {
    pickedCards[0].classList.toggle("flip"); // om CSS-klassen flip finns så ta bort annars lägg till den
    pickedCards[1].classList.toggle("flip");

    resetCards();
  }, 1000); // Vänta 1 sekund och sen flippa tillbaka korten så vi hinner se det andra kortet
}

function hasWon(): void {
  // Logik
  // Om foundPairs är lika med 8 så visa att användaren har vunnit
  if (foundPairs === 8) {
    overlayElem?.classList.toggle("show"); // ? säger att den ska kolla att overlayElem inte är null utan har ett HTML element sparat i variabeln
  }
}

function resetCards() {
  pickedCards = [];
}

function compareCards(): void {
  const cardOne = pickedCards[0].getAttribute("data-card");
  const cardTwo = pickedCards[1].getAttribute("data-card");

  if (cardOne === cardTwo) {
    foundPairs++;
    resetCards();
    hasWon();
    console.log("Hittade ett par!");
  } else {
    console.log("Ej samma!");
    flipBackCards();
  }
}

function addCard(card: HTMLElement): void {
  pickedCards.push(card);
}

function shuffle(): void {
  memoryCards.forEach((memoryCard) => {
    const card = memoryCard as HTMLElement;
    const position = Math.floor(Math.random() * memoryCards.length); // Slumpa en siffra mellan 0 - 16
    card.style.order = position.toString();
  });
}

function addClickEvent(): void {
  memoryCards.forEach((memoryCard) => {
    memoryCard.addEventListener("click", (event) => {
      const card: HTMLElement = event.currentTarget as HTMLElement;
      console.log(card);

      if (pickedCards.length < 2) {
        card.classList.toggle("flip"); // classList är alla CSS-klasser som finns på detta element
        addCard(card);
      }

      // Om pickedCards har två kort så jämför dessa
      if (pickedCards.length === 2) {
        compareCards();
      }
    });
  });

  shuffle();
}

addClickEvent();
