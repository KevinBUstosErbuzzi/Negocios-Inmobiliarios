let miImage = document.querySelector(".Foto img");

miImage.onclick = function () {
    
    let miSrc = miImage.getAttribute("src");
    
    if (miSrc === "img/5.jpg")
        miImage.setAttribute("src","img/2.jpg");
    else
        miImage.setAttribute("src","img/5.jpg");
}

document.addEventListener('DOMContentLoaded', () => {
const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

fetch(apiUrl)
.then(response => response.json())
.then(data => {
const galeria = document.getElementById('galeria');
data.forEach(photo => {
const img = document.createElement('img');
img.src = photo.url;
img.alt = photo.title;
galeria.appendChild(img);
});
})
.catch(error => console.error('Error al cargar las fotos:', error));
});
