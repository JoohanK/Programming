



const planets = document.querySelectorAll(".planet");
const sun = document.querySelector(".sun");
const overlay = document.querySelector(".overlay");
const factBox = document.querySelector(".fact-box");

// Lägg till klickhändelse på varje planet
planets.forEach((planet) => {
    planet.addEventListener("click", () => {
        // Ändra solens färg till månljus (ljusblå)
        sun.style.backgroundColor = "lightblue";

        // Visa faktarutan
        overlay.style.display = "block";

        // Lägg till information om planeten i faktarutan
        if (planet.classList.contains("jorden")) {
            // Om klickad planet är Jorden, lägg till information om Jorden
            factBox.textContent = "Information om Jorden: [Din information här]";
        } else if (planet.classList.contains("mercury")) {
            // Lägg till information om Merkurius
            factBox.textContent = "Information om Merkurius: [Din information här]";
        }
        // Lägg till andra planeter här...
    });
});

// Lägg till klickhändelse för att stänga faktarutan
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    // Återställ solens färg till gul när faktarutan stängs
    sun.style.backgroundColor = "rgb(255, 204, 0)";
});