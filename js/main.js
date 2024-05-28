let miImage = document.querySelector(".Foto img");

miImage.onclick = function () {
    
    let miSrc = miImage.getAttribute("src");
    
    if (miSrc === "img/5.jpg")
        miImage.setAttribute("src","img/2.jpg");
    else
        miImage.setAttribute("src","img/5.jpg");
}

document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://api.unsplash.com/search/photos';
    const query = 'houses';
    const clientId = 'd1heTDlZilzr0-1YTxRMJgbSKZ1J10XrQwA_tdzzoj0';

    fetch(`${apiUrl}?query=${query}&client_id=${clientId}&per_page=10`)
    .then(response => response.json())
    .then(data => {
        const galeria = document.getElementById('galeria');
        data.results.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.small;
        img.alt = photo.alt_description || 'Foto de casa';
        galeria.appendChild(img);
        });
    })
    .catch(error => console.error('Error al cargar las fotos:', error));
});

