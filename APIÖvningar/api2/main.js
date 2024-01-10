

const imagesElement = document.querySelector("#images")

function createImageItem(imageItem) {
  const imageElement = document.createElement(`img`)
  imageElement.setAttribute("src", imageItem.urls.thumb)
  imageElement.setAttribute("alt", imageItem.alt_description)
  imageElement.append(imageElement)
}

function displayImages(images){
  for(const image of images){
    createImageItem(image)
  }
}
async function getPhotos(){
  // client_id är vår API nyckel
  const response = await fetch()
  const data = await response.json()
  console.log(data)
  createImageItem(data.results)
}

getPhotos();
