let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.querySelector("#boton-mascota");
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador); 

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click',ataqueFuego)
    
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click',ataqueAgua);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click',ataqueTierra);
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
    let mascotaAleatorio = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if(mascotaAleatorio === 1){
        spanMascotaEnemigo.innerText = "Hipodoge";
    }else if(mascotaAleatorio === 2){
        spanMascotaEnemigo.innerText = "Capipepo";
    }else{
        spanMascotaEnemigo.innerText = "Ratigueya";
    };
};


function ataqueFuego(){
    ataqueJugador = 'Fuego';
    ataqueAleatorioEnemigo();
};


function ataqueAgua(){
    ataqueJugador = 'Agua';
    ataqueAleatorioEnemigo();

};


function ataqueTierra(){
    ataqueJugador = 'Tierra';
    ataqueAleatorioEnemigo();
};


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio === 1){
        ataqueEnemigo = 'Fuego';
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua';
    }else{
        ataqueEnemigo = 'Tierra';
    };
};


function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};


window.addEventListener('load',iniciarJuego);
