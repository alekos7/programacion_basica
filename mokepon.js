function iniciarJuego(){
    let botonMascotaJugador = document.querySelector("#boton-mascota");
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador); 
};


function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');

    if (inputHipodoge.checked) {
        alert('seleccionaste a hipodoge');
    }else if(inputCapipepo.checked){
        alert('Seleccionaste a capipepo');
    }else if(inputRatigueya.checked){
        alert('Seleccionaste la ratigueya');
    }else{
        alert("no me toques ahi");
    }
};

window.addEventListener('load',iniciarJuego);
