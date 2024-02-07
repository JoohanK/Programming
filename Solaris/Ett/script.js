



const planets = document.querySelectorAll(".planet");
const sun = document.querySelector(".sun");
const overlay = document.querySelector(".overlay");
const factBox = document.querySelector(".fact-box");

// URL för POST-förfrågan
const postUrl = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/';

// Skapa ett JSON-objekt med de data du vill skicka i POST-förfrågan
const postData = {
  // Lägg till de nödvändiga data för POST-förfrågan här
  // Exempel: name: 'Ditt namn'
};

// Gör POST-förfrågan
fetch(postUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(data => {
    // Här får du tillbaka nyckeln från POST-förfrågan
    const apiKey = data.apiKey;

    // Nu kan du använda den här nyckeln i dina GET-förfrågningar
    // Exempel: Gör en GET-förfrågan med apiKey
    fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/?apiKey=' + apiKey, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        // Här kan du hantera svaret från GET-förfrågan
      })
      .catch(error => {
        console.error('Något gick fel med GET-förfrågan: ', error);
      });
  })
  .catch(error => {
    console.error('Något gick fel med POST-förfrågan: ', error);
  });

// Lägg till klickhändelse för att stänga faktarutan
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    // Återställ solens färg till gul när faktarutan stängs
    sun.style.backgroundColor = "rgb(255, 204, 0)";
});