function iniciarJuego(){
    let botonMascotaJugador = document.querySelector("#boton-mascota");
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador); 
};


function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerText = 'Hipodoge';
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerText = 'Capipepo';
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerText = 'Ratigueya';
    }else{
        alert("no me toques ahi");
    };
    seleccionarMascotaEnemigo();
};


function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if(ataqueAleatorio === 1){
        spanMascotaEnemigo.innerText = "Hipodoge";
    }else if(ataqueAleatorio === 2){
        spanMascotaEnemigo.innerText = "Capipepo";
    }else{
        spanMascotaEnemigo.innerText = "Ratigueya";
    };
};


function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};


window.addEventListener('load',iniciarJuego);
