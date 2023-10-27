




const apiKey = 'TYdwIVh6PqOUkNZ05W2xDbGOxzJck4W-_mnLYh4zcrU';
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const imageContainer = document.getElementById('image-container');

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});


function performSearch() {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        alert('Fyll i ett sökord');
        return;
    }

    const apiUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=10`;

    fetch(apiUrl, {
        headers: {
            Authorization: `Client-ID ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayImages(data.results);
    })
    .catch(error => {
        console.error('Fel uppstod:', error);
    });
}

function displayImages(images) {
    imageContainer.innerHTML = '';

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.regular;
        imgElement.alt = image.description;
        imageContainer.appendChild(imgElement);
    });
}