/* Här är ett projekt där du kan skapa och visa en lista med slumpmässiga färger. Detta projekt kommer att använda JavaScript, HTML och CSS och inkluderar listmetoder, variabeländringar och loopar.

I detta projekt kan användaren klicka på knappen "Generera Slumpmässig Färg" för att skapa och visa en ny slumpmässig färg i listan. Projektet innehåller hantering av DOM-element, händelselyssnare, variabeländringar och loopar när du genererar färger och lägger till dem i listan.

Du kan också anpassa detta projekt genom att lägga till fler funktioner, som att rensa listan eller generera slumpmässiga färger med specifika kriterier.

baskod: https://codepen.io/mgedda/pen/PoVYEbE */

let generateButton = document.getElementById("generateButton");
colorBox = document.querySelector(".colorBox");
let colorHistoryList = document.querySelector(".colorHistorybox ul");
let RestartButton = document.getElementById("RestartButton");

const colorHistory = [];
const maxHistoryLength = 10;

const colors = [
  "Yellow",
  "Blue",
  "Red",
  "Green",
  "Purple",
  "Orange",
  "Brown",
  "turquoise",
];

function updateColorHistoryList() {
  colorHistoryList.innerHTML = "";
  colorHistory.forEach((color) => {
    let listItem = document.createElement("li");
    listItem.style.backgroundColor = color;
    colorHistoryList.appendChild(listItem);
  });
}

generateButton.addEventListener("click", () => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = randomColor;
  colorHistory.unshift(randomColor);

  if (colorHistory.length > maxHistoryLength) {
    colorHistory.pop();
  }

  updateColorHistoryList();
});

RestartButton.addEventListener("click", () => {
  colorHistoryList.innerHTML = "";
  colorHistory.length = 0;
  colorBox.style.backgroundColor = "White";
});
