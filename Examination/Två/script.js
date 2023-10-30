//"Solsystemet solaris" är en header


//Dom-element
//Alla planeter, mitt main-element
const planets = document.querySelectorAll(".planet");
//solen, en aside som ligger i main
const sun = document.querySelector(".sun");
//Hela sidan när man tryckt in på en planet
const planetInfoContainer = document.querySelector(".planet-info-container");
//Faktarutan när man tryckt in på en planet
const factBox = document.querySelector(".planet-info");
//Stängknappen
const closeInfoButton = document.getElementById("close-info");



//skapar min fetch function och hämtar api
function fetchData() {
    fetch('https://majazocom.github.io/Data/solaris.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Något gick fel');
        }
        //returnerar data från api till json-format
        return response.json();
      })

      //vad jag sen vill göra med min data
      .then((data) => {

        //console.log bara för att se api data
        console.log(data);
        
        // kopplar rätt data till rätt planet. datan går från vänster till höger på mina planeter men jag startar att hämta data från den andra indexplatsen i apit för att den första innehåller fakta om solen som jag exkluderar.
        planets.forEach((planet, index) => {
          const planetData = data[index+1];
          
          //När man klickar en planet visas informationen från Apit i min faktaruta och jag ändrar utseendet på hemsidan för att få en "natt-känsla"
          planet.addEventListener('click', () => {
            document.body.style.backgroundColor = "black"; 
            sun.style.backgroundColor = "lightblue"; 
            planetInfoContainer.style.display = "flex" ;
            
            //Anväder innerhtml på min factBox (planet-info) för att skapa olika idn på all olik data, detta gör jag för att sen kunna style min data i css. 
            //Skapar också "containers" för min data, fyra totalt name-info, description, random-info och moons.
          
            factBox.innerHTML = `
            
            <div id="name-info">
            <h2 id="planet-name"> ${planetData.name}</h2>
            <div id="latin-name">${planetData.latinName}</div>
            </div>
          
            <div id="description">${planetData.desc}</div>

            <div id="random-info">
            <div id="distance"><h3>Avstånd från solen i km</h3> ${planetData.distance}</div>
            <div id="orbital-period"><h3>Omloppstid i dagar</h3> ${planetData.orbitalPeriod}</div>
           
            <div id="temp-day"><h3>Max temp</h3>${planetData.temp.day} °C</div>
            <div id="temp-night"><h3>Min temp</h3> ${planetData.temp.night} °C</div>
            </div>

            <div id="moons"><h2>Månar</h2> ${planetData.moons.join(', ')}</div>`
        
            
            //Alla planeter förutom den jag tryckt på skall försvinna (display none).  
            planets.forEach(otherPlanet => {
                if (otherPlanet !== planet) {
                    otherPlanet.style.display = 'none';
                }
            });

          });
        });
      })

      //Har en catch för att fånga eventuella fel vid hämtning av API
      .catch((error) => {
        console.error('Fel: ' + error);
      });
  }
  

  //Jag kör min fetch-funktion och hämtar informationen som ligger på APIn 
  fetchData();

  //När man trycker på stäng knappen efter att ha läst faktarutan händer dessa saker
closeInfoButton.addEventListener("click", () => {

    //webbplatsen skall få tillbaka sin orginal bakgrundsfärg
    document.body.style.backgroundColor = "rgb(24, 10, 39)"; 
    //solen skall få tillbaka sin orginalfärg
    sun.style.backgroundColor = "rgb(255, 204, 0)"; 
    //min faktaruta skall försvinnanär jag klicka stäng
    planetInfoContainer.style.display = "none";
   //Alla planeter skall komma tillbaka när jag klickar stäng på faktarutan
    planets.forEach(planet => {
        planet.style.display = 'block';
    }); 
});













  


