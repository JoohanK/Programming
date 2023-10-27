


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
         
        
            factBox.textContent = 
            `Namn: ${planetData.name}
            Latin: ${planetData.latinName}
            Description: ${planetData.desc}
            Avstånd från solen: ${planetData.distance} km
            Omloppstid: ${planetData.orbitalPeriod} dagar
            omkrets: ${planetData.circumference}
            moons: ${planetData.moons.join(', ')}
            temp: ${planetData.temp.day} °C
            Temp på natten: ${planetData.temp.night} °C`

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

    
    document.body.style.backgroundColor = "rgb(88, 43, 238)"; 
    sun.style.backgroundColor = "rgb(255, 204, 0)"; 
    planetInfoContainer.style.display = "none";
    planets.forEach(planet => {
        planet.style.display = 'block';
    }); 
});













  


