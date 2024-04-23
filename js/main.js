let miImage = document.querySelector(".Foto img");

miImage.onclick = function () {
    
    let miSrc = miImage.getAttribute("src");
    
    if (miSrc === "img/5.jpg")
        miImage.setAttribute("src","img/2.jpg");
    else
        miImage.setAttribute("src","img/5.jpg");
}
