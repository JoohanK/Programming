const BASE_URL = "https://api.unsplash.com/search/photos/?client_id=_Lp0P53uJXYWT4Ma77zsjrHhGJ9uW-y25I3XShkqwhY";

const searchInputEl = document.getElementById('search-input');

const searchButtonEl = document.getElementById('search-button');

const resultContainerEl = document.querySelector('.result-container');
const nextPageBtn = document.querySelector(".next-btn");
const prevPageBtn = document.querySelector(".prev-btn");
let page = 1;
let currentImage;
let images = [];
document.querySelector(".page-number").innerHTML = page;


async function getImageData () {
    let inputValue = searchInputEl.value;
   
    // greja med vår url
    let url = BASE_URL + "&page=" + page + "&query=" + inputValue;
    // hämta data från api:et
    let response = await fetch(url);
    let data = await response.json();
    images = data.results;
    // ta hämtad data och pytsa ut i gränssnittet
    renderResult(data.results);
}


searchButtonEl.addEventListener("click", async () => {
   
   getImageData();
    
});

function renderResult (data) {
    //Tömmer tidigare innehåll i container
    resultContainerEl.innerHTML = "";
    data.forEach((imageData, i) => {
        let imageEl = document.createElement('article');
        imageEl.className += "thumbnail";
        // sparar id för bilden tills när vi klickar på den
        imageEl.id = i;
        imageEl.style.backgroundImage = `url(${imageData.urls.thumb})`;
        imageEl.style.width = "200px";
        imageEl.style.height = "200px";
        imageEl.addEventListener('click', (e) => {
            handleClickedImage(e);
        })
        // lägga in den i vår HTML
        resultContainerEl.appendChild(imageEl);
    });
};

function handleClickedImage(e) {
    console.log(e.target.id);
    const id = e.target.id;
    const imageData = images [id];
    console.log(imageData);
    localStorage.setItem("imageData", JSON.stringify(imageData));

}

nextPageBtn.addEventListener("click", () => {
    page = page + 1
    getImageData();
    document.querySelector(".page-number").innerHTML = page;
})
prevPageBtn.addEventListener("click", () => {
    //kolla så att inte nuvarande sida är 1
    if (page > 1) {
    page = page - 1
    getImageData();
    document.querySelector(".page-number").innerHTML = page;
}});