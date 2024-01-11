"use strict";
/**
 * 1. Hämta alla kort och sätt en eventlistener på varje kort
 * 2. När jag klickar på ett kort så sätt klassen flip och spara undan kortet
 * 3. Om jag har klickat på två kortet så hämta data-card och jämför värden
 *   a. Om samma öka hittade par med 1
 *   b. Annars ta bort klassen flip från både korten
 * 4. Om antal hittade par är 8 så visa att man vann
 */
const memoryCards = document.querySelectorAll('.memory-card');
let pickedCards = [];
let foundPairs = 0;
const overlayElem = document.querySelector('.overlay');
function flipBackCards() {
    setTimeout(() => {
        pickedCards[0].classList.toggle('flip'); // om CSS-klassen flip finns så ta bort annars lägg till den
        pickedCards[1].classList.toggle('flip');
        resetCards();
    }, 1000); // Vänta 1 sekund och sen flippa tillbaka korten så vi hinner se det andra kortet
}
function hasWon() {
    // Logik
    // Om foundPairs är lika med 8 så visa att användaren har vunnit
    if (foundPairs === 8) {
        overlayElem === null || overlayElem === void 0 ? void 0 : overlayElem.classList.toggle('show'); // ? säger att den ska kolla att overlayElem inte är null utan har ett HTML element sparat i variabeln
    }
}
function resetCards() {
    pickedCards = [];
}
function compareCards() {
    const cardOne = pickedCards[0].getAttribute('data-card');
    const cardTwo = pickedCards[1].getAttribute('data-card');
    if (cardOne === cardTwo) {
        foundPairs++;
        resetCards();
        hasWon();
        console.log('Hittade ett par!');
    }
    else {
        console.log('Ej samma!');
        flipBackCards();
    }
}
function addCard(card) {
    pickedCards.push(card);
}
function shuffle() {
    memoryCards.forEach((memoryCard) => {
        const card = memoryCard;
        const position = Math.floor(Math.random() * memoryCards.length); // Slumpa en siffra mellan 0 - 16
        card.style.order = position.toString();
    });
}
function addClickEvent() {
    memoryCards.forEach((memoryCard) => {
        memoryCard.addEventListener('click', (event) => {
            const card = event.currentTarget;
            console.log(card);
            if (pickedCards.length < 2) {
                card.classList.toggle('flip'); // classList är alla CSS-klasser som finns på detta element
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
