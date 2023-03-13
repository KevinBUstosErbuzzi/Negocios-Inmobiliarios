let miImage = document.querySelector(".Foto img");
miImage.onclick = function () {let miSrc = miImage.getAttribute("src");
if (miSrc === "imagenes/5.jpg") {miImage.setAttribute("src","imagenes/2.jpg");}
else {miImage.setAttribute("src","imagenes/5.jpg");}}
