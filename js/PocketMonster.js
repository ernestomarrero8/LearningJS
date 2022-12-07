
let AtaqueJugador = ''
let enemigo = ''
let IdAtaqueJugador = 0
let IdAtaqueEnemigo = 0
let ResultadoBatalla =''
let VidasJugador = 3
let VidasEnemigo = 3

function aleatorio(min,max) {
    return Math.floor(Math.random()* (max - min + 1) + min)
}


function IniciarJuego() {
    
    let BotonMascota = document.getElementById('Boton-Mascota')
    BotonMascota.addEventListener('click', SeleccionarMascotaJugador)

    let BotonFuego = document.getElementById('BotonFuego')
    let BotonAgua = document.getElementById('BotonAgua')
    let BotonHierva = document.getElementById('BotonHierva')

    BotonFuego.addEventListener("click",AtaqueFuego)
    BotonAgua.addEventListener("click",AtaqueAgua)
    BotonHierva.addEventListener("click",AtaqueHierva)

    
}

function SeleccionarMascotaJugador() {

    let Turtle = document.getElementById('Turtle')
    let Treevle = document.getElementById('Treevle')
    let Fyre = document.getElementById('Fyre')
    let Suprat = document.getElementById('Suprat')
    let Ank = document.getElementById('Ank')
    let Pydos = document.getElementById('Pydos')
    let MascotaJugador = document.getElementById('MascotaJugador')

    if (Turtle.checked) {

        MascotaJugador.innerHTML = 'Turtle'

    }else if (Treevle.checked) {

        MascotaJugador.innerHTML = 'Treevle'

    }else if (Fyre.checked) {
        
        MascotaJugador.innerHTML = 'Fyre'

    }else if(Suprat.checked) {
        
        MascotaJugador.innerHTML = 'Suprat'

    }else if(Ank.checked) {

        MascotaJugador.innerHTML = 'Ank'

    }else if(Pydos.checked) {

        MascotaJugador.innerHTML = 'Pydos'
    }else {
        alert('Debes seleccionar una mascota')
    
    }
    
    SeleccionarMascotaEnemiga()
}


function SeleccionarMascotaEnemiga() {


    let enemigo = aleatorio(1,6)

    let MascotaEnemigo = document.getElementById('MascotaEnemigo')

    if (enemigo==1) {

        MascotaEnemigo.innerHTML = 'Turtle'

    }else if (enemigo==2) {

        MascotaEnemigo.innerHTML = 'Treevle'

    }else if (enemigo==3) {
        
        MascotaEnemigo.innerHTML = 'Fyre'

    }else if(enemigo==4) {
        
        MascotaEnemigo.innerHTML = 'Suprat'

    }else if(enemigo==5) {

        MascotaEnemigo.innerHTML = 'Ank'

    }else if(enemigo==6) {

        MascotaEnemigo.innerHTML = 'Pydos'    
    }
}

function AtaqueFuego() {

    AtaqueJugador = 'Tu macota utilizo Llamarada 🔥'

    IdAtaqueJugador = 1

    AtaqueAleatorioEnemigo()

}

function AtaqueAgua() {
    
    AtaqueJugador = 'Tu macota utilizo Lluvia congelada🌧️'

    IdAtaqueJugador = 2

    AtaqueAleatorioEnemigo()
}

function AtaqueHierva() {
    
    AtaqueJugador = 'Tu macota utilizo Hojas Cortantes🍃'

    IdAtaqueJugador = 3

    AtaqueAleatorioEnemigo()
}

function AtaqueAleatorioEnemigo() {
    enemigo = aleatorio(1,3)

    if (enemigo == 1) {
        
        enemigo = 'El ataque enemigo es de fuego 🔥'

        IdAtaqueEnemigo = 1
    
    }if (enemigo == 2) {

        enemigo = 'El ataque enemigo es de agua 💧'

        IdAtaqueEnemigo = 2

    } else {

        enemigo = 'El ataque enemigo es de hierva 🍃'

        IdAtaqueEnemigo = 3

    }
   
        CrearMensaje()
    
    
}

function CrearMensaje() {
    
    let sectionMesajes = document.getElementById('Mensajes')
    let parrafo = document.createElement('p')
    let SpanVidasJugador = document.getElementById('VidasJugador')
    let SpanVidasEnemigo = document.getElementById('VidasEnemigo')

    
        
    
    if (IdAtaqueJugador == 1 && IdAtaqueEnemigo == 1) {
        ResultadoBatalla = 'Empate🔥'
        VidasJugador
        VidasEnemigo
    }else if ( IdAtaqueJugador == 2 && IdAtaqueEnemigo == 2) {
        ResultadoBatalla = 'Empate💧'
        VidasJugador
        VidasEnemigo
    }else if  (IdAtaqueJugador == 3 && IdAtaqueEnemigo == 3){
        ResultadoBatalla = 'Empate🍃'
        VidasJugador
        VidasEnemigo
    }else if (IdAtaqueJugador == 1 && IdAtaqueEnemigo == 2) {
        ResultadoBatalla = 'Perdiste 👾😣'
        VidasJugador=VidasJugador-1
        VidasEnemigo
    }else if (IdAtaqueJugador == 2 && IdAtaqueEnemigo == 3){
        ResultadoBatalla = 'Perdiste 👾😣'
        VidasJugador=VidasJugador-1
        VidasEnemigo
    }else if (IdAtaqueJugador == 3 && IdAtaqueEnemigo == 1){
        ResultadoBatalla = 'Perdiste 👾😣'
        VidasJugador=VidasJugador-1
        VidasEnemigo
    }else if (IdAtaqueJugador == 1 && IdAtaqueEnemigo == 3){
        ResultadoBatalla = 'Ganaste 🏆✌🏽'
        VidasJugador
        VidasEnemigo=VidasEnemigo-1
    }else if (IdAtaqueJugador == 3 && IdAtaqueEnemigo == 2){
        ResultadoBatalla = 'Ganaste 🏆✌🏽'
        VidasJugador
        VidasEnemigo=VidasEnemigo-1
    }else if (IdAtaqueJugador == 2 && IdAtaqueEnemigo == 1){
        ResultadoBatalla = 'Ganaste 🏆✌🏽'
        VidasJugador
        VidasEnemigo=VidasEnemigo-1
    }
    
    
    parrafo.innerHTML = AtaqueJugador + ' ' + enemigo + ResultadoBatalla

    sectionMesajes.appendChild(parrafo)

    SpanVidasJugador.innerHTML=VidasJugador
    SpanVidasEnemigo.innerHTML=VidasEnemigo



}



window.addEventListener('load', IniciarJuego)