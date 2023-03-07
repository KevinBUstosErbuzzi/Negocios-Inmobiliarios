let miImage = document.querySelector(".Foto img");
miImage.onclick = function () {let miSrc = miImage.getAttribute("src");
if (miSrc === "imagenes/5.jpg") {miImage.setAttribute("src","imagenes/2.jpg");}
else {miImage.setAttribute("src","imagenes/5.jpg");}}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() 
{let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) 
    {estableceNombreUsuario();} 
    else {localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Bienvenido/a ' + miNombre;}}
  
if (!localStorage.getItem('nombre')) {estableceNombreUsuario();}
else {let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido/a ' + nombreAlmacenado;}
miBoton.onclick = function() {estableceNombreUsuario();}
