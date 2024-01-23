console.log('hej från app.js');
const BASE_URL = "https://swapi.dev/api/";
let characters = [];
let page = 1;
let totalPages = 1;
document.querySelector('.current-page').innerText = page;

getCharacters();
async function getCharacters() {
    let resp = await fetch(BASE_URL + 'people' + '/?page=' + page);
    let data = await resp.json();
    characters = await data.results;
    // få ut vårt resultat på skärmen
    renderCharactersToUI(characters);
    // räkna ut hur många sidor av karaktärer som vi fått
    let charCount = data.count;
    totalPages = charCount / 10;
    totalPages = Math.ceil(totalPages);
    document.querySelector('.total-pages').innerText = totalPages;
};

function renderCharactersToUI(characters) {
    let charactersContainer = document.querySelector('.characters-list');
    charactersContainer.innerHTML = "";
    characters.forEach((character, index) => {
        let liEl = document.createElement('li');
        liEl.setAttribute('id', 'char-' + index);
        liEl.innerText = character.name;
        liEl.addEventListener('click', () => {
            clickedCharacter(character);
        })
        charactersContainer.appendChild(liEl);
    });
};

async function clickedCharacter(character) {
    console.log(character);
    let nameEl = document.querySelector('.character-details__name');
    nameEl.innerText = character.name;
    let heightEl = document.querySelector('.character-details__height');
    heightEl.innerText = character.height;
    let massEl = document.querySelector('.character-details__mass');
    massEl.innerText = character.mass;
    let haircolorEl = document.querySelector('.character-details__haircolor');
    haircolorEl.innerText = character.hair_color;
    let skincolorEl = document.querySelector('.character-details__skincolor');
    skincolorEl.innerText = character.skin_color;
    let eyecolorEl = document.querySelector('.character-details__eyecolor');
    eyecolorEl.innerText = character.eye_color;
    let birthyearEl = document.querySelector('.character-details__birthyear');
    birthyearEl.innerText = character.birth_year;

    // hämta hemplanet
    let resp = await fetch(character.homeworld);
    let planetData = await resp.json();
    console.log(planetData);
    // ploppa ut i ui
    let planetNameEl = document.querySelector('.character-homeworld__name');
    planetNameEl.innerText = planetData.name;
    let planetRotationEl = document.querySelector('.character-homeworld__rotation-period');
    planetRotationEl.innerText = planetData.rotation_period;
};

// pagination
function pagination(direction) {
    if (direction === 'prev' && page !== 1) {
        page = page - 1;
        // gå till tidigare sida
        getCharacters();
    } else if (direction === 'next' && page !== totalPages) {
        page = page + 1;
        getCharacters();
    }
    document.querySelector('.current-page').innerText = page;
};

document.querySelector('.prev-page').addEventListener('click', () => {
    pagination('prev');
});
document.querySelector('.next-page').addEventListener('click', () => {
    pagination('next');
});