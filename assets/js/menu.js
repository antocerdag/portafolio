function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function cambionav(){

	var distscroll= window.pageYOffset || document.documentElement.scrollTop;
	if (distscroll > 150 ){ // al hacer scroll se debe eliminar la clase hide del nav que esta oculto
		document.getElementById("menu").classList.add('hide');

	}else{
		document.getElementById("menu").classList.remove('hide');
	}
};
window.addEventListener('scroll' , cambionav);

/*function navLateral(){
	var distscroll= window.pageYOffset || document.documentElement.scrollTop;
	if (distscroll > 450 ){ // al hacer scroll se debe eliminar la clase hide del nav que esta oculto
		document.getElementById("menu-lateral").classList.remove('hide');

	}else{
		document.getElementById("menu-lateral").classList.add('hide');
	}
}

window.addEventListener('scroll' , navLateral);*/