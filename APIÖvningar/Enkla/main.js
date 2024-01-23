/********* Övning 1 *********/

/* let url = "https://majazocom.github.io/Data/pokemons.json";

function fetchPokemonData(adress){
    const nameList = document.querySelector(`#output`);
    fetch(adress)
    .then((response) => response.json())
    .then((data) => {
        data.map((pokemon) => {

        const listItem = document.createElement(`li`);
        listItem.textContent = pokemon.name;
        nameList.appendChild(listItem);
    });
    });
    
}

console.log(fetchPokemonData(url)); */


/************ Övning 2 ************/

/* let url2 = "https://majazocom.github.io/Data/dogs.json";

function fetchDogData(dogs) {

    const dogList = document.querySelector(`#outputDog`)
    fetch(dogs)
    .then(response => response.json())
    .then((data) => {
        data.forEach(dog => {
            console.log(dog.name);
            const listItemDog = document.createElement(`li`);
            listItemDog.textContent = dog.name;
            dogList.appendChild(listItemDog);
        })
    }
    )
}

(fetchDogData(url2)); */

/************* Övning 4 ***************/

let url = "https://majazocom.github.io/Data/attendees.json";

function fetchEventAttendees() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Filtrera deltagarna baserat på om de ska komma och har allergier
      const filteredAttendees = data.filter(
        (attendee) => attendee.attending === true && attendee.allergies.length > 0
      );

      // Rendera ut de filtrerade deltagarna
      filteredAttendees.forEach((attendee) => {
        console.log(attendee.name);
      });
    })
    .catch((error) => {
      console.error("Ett fel inträffade vid hämtning av deltagare:", error);
    });
}

fetchEventAttendees();