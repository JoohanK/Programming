const imageData = JSON.parse (localStorage.getItem("imageData"));
console.log(imageData);

document.getElementById("img").setAttribute("src", imageData.urls.thumb);
document.getElementById("img").setAttribute("alt", imageData.alt_description);

document.querySelector('.createdAt').innerText += imageData.user.name;
let dateObj = new Date (imageData.created_at);

document.querySelector('.uploadedAt').innerText += dateObj.toLocaleDateString