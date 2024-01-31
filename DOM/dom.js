//. 1a Övning 1 

const numberList = document.querySelector(`#numberList`)

for (let i=1; i<=10; i++){
    const listItem = document.createElement(`li`) 
    listItem.innerText = i
    numberList.append(listItem)
    if (i % 2 !==0) {
        listItem.classList.add(`odd`)
    }
} 

// 1b Skapa en enkel webbsida som visar en lista över namn från en array. Du vill också markera namnen som börjar med bokstaven "A" i fet stil.

const names = ["Alice", "Bob", "Charlie", "Anna", "David", "Eve"];

// Hämta referens till ul-elementet i HTML
const namnlistaUl = document.getElementById("namnlista");

// Loopa igenom namnarrayen och skapa listelement för varje namn
names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;

    // Om namnet börjar med "A", lägg till klassen "highlight"
    if (name.startsWith("A")) {
        li.classList.add("highlight");
    }

    // Lägg till listelementet i ul-elementet
    namnlistaUl.appendChild(li);
});

// 3.Skapa en enkel webbsida som visar en lista över namn från en array. Men först efter att du har tryckt på e
const names2 = ["Amelia", "Arne", "Kalle", "Ebba", "David", "Eve", "Jacob"];

// Hämta referens till knappen och ul-elementet i HTML
const listArrayButton = document.getElementById("listArrayButton");
const nameListUl = document.getElementById("nameList");

let isListVisible = false; // En flagga för att hålla koll på om listan är synlig

// Lägg till en klickhändelselyssnare på knappen
listArrayButton.addEventListener("click", function() {
    // Om listan är synlig, ta bort den genom att tömma ul-elementet
    if (isListVisible) {
        nameListUl.innerHTML = ""; // Töm ul-elementet
        isListVisible = false; // Uppdatera flaggan
    } else {
        // Om listan är dold, skapa listan som tidigare
        names2.forEach(name2 => {
            const li = document.createElement("li");
            li.textContent = name2;
            nameListUl.appendChild(li);
        });
        isListVisible = true; // Uppdatera flaggan
    }
});


// 4. skapa en lista över städer och använd sedan JavaScript för att rendera listan i en HTML-tabell
const cities =["Stockholm", "Göteborg", "Malmö", "Uppsala", "Lund"];

//Hämta referens till tabellens tbody-element i HTML
const tbody = document.querySelector("#cityTable tbody");

//Loopa igenom städerna och skapa tabellrader och celler för varje stad
cities.forEach(city => {
    const row = document.createElement("tr"); // Skapa en tabellrad

    const cell = document.createElement("td"); // SKapa en cell
    cell.textContent = city; // sätt cellens textinnehåll till stadsnamnet

    row.appendChild(cell); // Lägg till cellen i raden
    tbody.appendChild(row); // Lägg till raden i tabellens tbody

  
})

// 5. Skapa en sida med en enkel meny där användaren kan ändra bakgrundsfärg baserat på användarens val

const body = document.querySelector(`body`)
const redButton = document.querySelector(`#redButton`)
const blueButton = document.querySelector(`#blueButton`)
const greenButton = document.querySelector(`#greenButton`)
const yellowButton = document.querySelector(`#yellowButton`)
const beigeButton = document.querySelector(`#beigeButton`)
// console.log(redButton) Testa om den finns

redButton.addEventListener(`click`, () => {
   /*  body.style.backgroundColor =  */
    body.className = `red`

})
blueButton.addEventListener(`click`, () => {
   /*  body.style.backgroundColor =  */
    body.className = `blue`

})
greenButton.addEventListener(`click`, () => {
   /*  body.style.backgroundColor =  */
    body.className = `green`

})
yellowButton.addEventListener(`click`, () => {
   /*  body.style.backgroundColor =  */
    body.className = `yellow`

})
beigeButton.addEventListener(`click`, () => {
   /*  body.style.backgroundColor =  */
    body.className = `beige`

})

// 6 
// Hämta referenser till HTML-elementen
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorSelect = document.getElementById("operator");
const calculateButton = document.getElementById("calculateButton");
const resultSpan = document.getElementById("result");

// Lägg till en klickhändelselyssnare på knappen
calculateButton.addEventListener("click", function() {
    // Hämta talen från input-fälten
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    // Hämta den valda operatorn från select-elementet
    const operator = operatorSelect.value;

    // Beräkna resultatet baserat på den valda operatorn
    let result;
    if (operator === "add") {
        result = num1 + num2;
    } else if (operator === "subtract") {
        result = num1 - num2;
    } else if (operator === "multiply") {
        result = num1 * num2;
    } else if (operator === "divide") {
        // Kontrollera att num2 inte är noll för att undvika division med noll
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Kan inte dela med noll";
        }
    }

    // Visa resultatet i resultat-spannet
    resultSpan.textContent = result;
});

// 7 Visa veckodag efter att användaren angett ett nummer och tryckt på knappen "Visa veckodag". 

// Hämta referenser till HTML-elementen
const dayInput = document.getElementById("day");
const showDayButton = document.getElementById("showDayButton");
const weekdaySpan = document.getElementById("weekday");

// Lägg till en klickhändelselyssnare på knappen
showDayButton.addEventListener("click", function() {
    // Hämta det angivna numret från input-fältet
    const dayNumber = parseInt(dayInput.value);

    // Skapa en array med veckodagar
    const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

    // Kontrollera om det angivna numret är inom intervallet 1-7
    if (dayNumber >= 1 && dayNumber <= 7) {
        // Hämta veckodagen från arrayen och visa den i resultat-spannet
        const weekday = weekdays[dayNumber - 1];
        weekdaySpan.textContent = weekday;
    } else {
        // Om numret inte är inom intervallet, visa ett felmeddelande
        weekdaySpan.textContent = "Ogiltigt nummer";
    }
});