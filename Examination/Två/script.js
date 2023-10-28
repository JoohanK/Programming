


const planets = document.querySelectorAll(".planet");
const sun = document.querySelector(".sun");
const overlay = document.querySelector(".overlay");
const factBox = document.querySelector(".planet-info");
const planetInfoContainer = document.querySelector(".planet-info-container");
const closeInfoButton = document.getElementById("close-info");




function fetchData() {
    fetch('https://majazocom.github.io/Data/solaris.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Något gick fel');
        }
        return response.json();
      })
      .then((data) => {

        console.log(data);
        const planets = document.querySelectorAll('.planet');
        planets.forEach((planet, index) => {
          const planetData = data[index+1];
          planet.addEventListener('click', () => {
         
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
            
          

            document.body.style.backgroundColor = "black"; 
            sun.style.backgroundColor = "lightblue"; 
            planetInfoContainer.style.display = "flex" ;
            

            planets.forEach(otherPlanet => {
                if (otherPlanet !== planet) {
                    otherPlanet.style.display = 'none';
                }
            });

          });
        });
      })
      .catch((error) => {
        console.error('Fel: ' + error);
      });
  }
  

  fetchData();

closeInfoButton.addEventListener("click", () => {

    
    document.body.style.backgroundColor = "rgb(24, 10, 39)"; 
    sun.style.backgroundColor = "rgb(255, 204, 0)"; 
    planetInfoContainer.style.display = "none";
    planets.forEach(planet => {
        planet.style.display = 'block';
    }); 
});













  


