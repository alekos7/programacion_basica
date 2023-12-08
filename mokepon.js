function iniciarJuego(){
    
};


function seleccionarMascotaJugador(){
    alert("Seleccionaste tu mascota");
};


let botonMascotaJugador = document.querySelector("#boton-mascota");
botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);

window.addEventListener('load',iniciarJuego);




