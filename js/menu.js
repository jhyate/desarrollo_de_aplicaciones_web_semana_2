var btnMenu = document.getElementById('btn-menu');//EN ESTA LINEA GUARDO EL ID html "btn-menu" EN LA VARIABLE "btnMenu".
var nav = document.getElementById('nav');//EN ESTA LINEA GUARDO EL ID html "nav" EN LA VARIABLE "nav".

btnMenu.addEventListener('click', function(){
	nav.classList.toggle('mostrar');
})