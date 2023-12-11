let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'none';

    let botonMascotaJugador = document.querySelector("#boton-mascota");
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador); 

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click',ataqueFuego);
    
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click',ataqueAgua);

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click',ataqueTierra);

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
};


function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'flex';

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
    }else if(ataqueAleatorio === 2){
        ataqueEnemigo = 'Agua';
    }else{
        ataqueEnemigo = 'Tierra';
    };
    combate();
};


function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje('Empate');
    }else if(ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje('Ganaste');
        vidasEnemigo--;
        spanVidasEnemigo.innerText = vidasEnemigo;
    }else if(ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje('Ganaste');
        vidasEnemigo--;
        spanVidasEnemigo.innerText = vidasEnemigo;
    }else if(ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje('Ganaste');
        vidasEnemigo--;
        spanVidasEnemigo.innerText = vidasEnemigo;
    }else{
        crearMensaje('Perdiste');
        vidasJugador--;
        spanVidasJugador.innerText = vidasJugador;
    };

    //revisar las vidas
    revisarVidas();
};


function revisarVidas(){
    if(vidasEnemigo === 0){
        crearMensajeFinal('Felicitaciones, Ganaste');
    }else if(vidasJugador == 0){
        crearMensajeFinal('Lo siento, perdiste');
    };
};


function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p');
    parrafo.innerText = 'Tu mascota ataco con ' + ataqueJugador + ' y la mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado;

    sectionMensajes.appendChild(parrafo);
}


function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p');
    parrafo.innerText = resultadoFinal;

    sectionMensajes.appendChild(parrafo);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true;
    
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true;

    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true;

    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'block';
};


function reiniciarJuego(){
    location.reload();
};


function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};


window.addEventListener('load',iniciarJuego);
