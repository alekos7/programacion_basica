function iniciarJuego(){
    let botonMascotaJugador = document.querySelector("#boton-mascota");
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);
};


function seleccionarMascotaJugador(){
    alert("Seleccionaste tu mascota");
};

window.addEventListener('load',iniciarJuego);




