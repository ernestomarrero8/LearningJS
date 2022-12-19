let AtaqueJugador
let enemigo
let IdAtaqueJugador = 0
let IdAtaqueEnemigo = 0
let ResultadoBatalla
let VidasJugador = 3
let VidasEnemigo = 3
let ArrayMonsters =[]
let OpcionDeMascota
let MascotaJugador
let InputAqurium
let InputTreevle
let InputFyre
let InputSuprat
let InputMonank
let InputPydos

const ContenedorTarjetas = document.getElementById('DivTarjetas')
const sectionReiniciar = document.getElementById('Reiniciar')
const BotonMascota = document.getElementById('Boton-Mascota')
const BotonFuego = document.getElementById('BotonFuego')
const BotonAgua = document.getElementById('BotonAgua')
const BotonHierva = document.getElementById('BotonHierva')
const parrafo = document.createElement('p')

class PoketMonster{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques =[]
    }
}

let Aqurium = new PoketMonster('Aqurium','./assest/Aqurium.png', 3)
let Treevle = new PoketMonster('Treevle','./assest/Treevle.png', 3)
let Fyre = new PoketMonster('Fyre','./assest/Fyre.png', 3)
let Suprat = new PoketMonster('Suprat','./assest/Suprat.png', 3)
let Monank = new PoketMonster('Monank','./assest/Monank.png', 3)
let Pydos = new PoketMonster('Pydos','./assest/Pydos.png', 3)

Aqurium.ataques.push(
    { NombreAtaque: 'Lluvia congelada🌧️',id:'BotonAgua'},
    { NombreAtaque: 'Ataque de agua 💧',id:'BotonAgua'}
)

Treevle.ataques.push(
    { NombreAtaque: 'Hojas Cortantes🍃',id:'BotonHierva'},
    { NombreAtaque: 'Ataque de hierva 🍃',id:'BotonHierva'},
    { NombreAtaque: 'Llamarada 🔥',id:'BotonFuego'},
    { NombreAtaque: 'Ataque de fuego 🔥',id:'BotonFuego'}
)

Fyre.ataques.push(
    { NombreAtaque: 'Llamarada 🔥',id:'BotonFuego'},
    { NombreAtaque: 'Ataque de fuego 🔥',id:'BotonFuego'},
    { NombreAtaque: 'Ataque de hierva 🍃',id:'BotonHierva'},
    { NombreAtaque: 'Ataque de agua 💧',id:'BotonAgua'}
)

Suprat.ataques.push(
    { NombreAtaque: 'Lluvia congelada🌧️',id:'BotonAgua'},
    { NombreAtaque: 'Ataque de agua 💧',id:'BotonAgua'},
    { NombreAtaque: 'Hojas Cortantes🍃',id:'BotonHierva'},
    { NombreAtaque: 'Ataque de hierva 🍃',id:'BotonHierva'},
    { NombreAtaque: 'Ataque de fuego 🔥',id:'BotonFuego'}
)

Monank.ataques.push(
    { NombreAtaque: 'Lluvia congelada🌧️',id:'BotonAgua'},
    { NombreAtaque: 'Ataque de agua 💧',id:'BotonAgua'},
    { NombreAtaque: 'Hojas Cortantes🍃',id:'BotonHierva'},
    { NombreAtaque: 'Ataque de hierva 🍃',id:'BotonHierva'},
    { NombreAtaque: 'Llamarada 🔥',id:'BotonFuego'},
    { NombreAtaque: 'Ataque de fuego 🔥',id:'BotonFuego'}
)

Pydos.ataques.push(
    { NombreAtaque: 'Lluvia congelada🌧️',id:'BotonAgua'},
    { NombreAtaque: 'Ataque de agua 💧',id:'BotonAgua'},
    { NombreAtaque: 'Llamarada 🔥',id:'BotonFuego'},
    { NombreAtaque: 'Ataque de fuego 🔥',id:'BotonFuego'},
    { NombreAtaque: 'Ataque de hierva 🍃',id:'BotonHierva'}
)

ArrayMonsters.push(Aqurium,Treevle,Fyre,Suprat,Monank,Pydos)



function aleatorio(min,max) {
    return Math.floor(Math.random()* (max - min + 1) + min)
}


function IniciarJuego() {

    ArrayMonsters.forEach((PoketMonster) => {
        OpcionDeMascota = `
        <input type="radio" name="mascota" id=${PoketMonster.nombre} />
                <label class="targetaPoketMonsters" for=${PoketMonster.nombre}>
                    <p>${PoketMonster.nombre}</p>
                    <img src=${PoketMonster.foto} alt=${PoketMonster.nombre}>
                </label>
                `
    ContenedorTarjetas.innerHTML += OpcionDeMascota
    });

    InputAqurium = document.getElementById('Aqurium')
    InputTreevle = document.getElementById('Treevle')
    InputFyre = document.getElementById('Fyre')
    InputSuprat = document.getElementById('Suprat')
    InputMonank = document.getElementById('Monank')
    InputPydos = document.getElementById('Pydos')
    
    let sectionSeleccionarAtaque = document.getElementById('Seleccionar-Ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    BotonMascota.addEventListener('click', SeleccionarMascotaJugador)
    
    BotonFuego.addEventListener('click',AtaqueFuego)
    BotonAgua.addEventListener('click',AtaqueAgua)
    BotonHierva.addEventListener('click',AtaqueHierva)

    let BotonReiniciar = document.getElementById('Boton-Reiniciar')
    BotonReiniciar.addEventListener('click',ReiniciarJuego)
}


function SeleccionarMascotaJugador() {

    let sectionSeleccionarAtaque = document.getElementById('Seleccionar-Ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let sectionSeleccionarmascota = document.getElementById('Seleccionar-mascota')
    sectionSeleccionarmascota.style.display = 'none'


    let SpanMascotaJugador = document.getElementById('MascotaJugador')

    if (InputAqurium.checked) {

        SpanMascotaJugador.innerHTML = InputAqurium.id

    }else if (InputTreevle.checked) {

        SpanMascotaJugador.innerHTML = InputAqurium.id

    }else if (InputFyre.checked) {
        
        SpanMascotaJugador.innerHTML = SpanMascotaJugador.id

    }else if(InputSuprat.checked) {
        
        SpanMascotaJugador.innerHTML = InputSuprat.id

    }else if(InputMonank.checked) {

        SpanMascotaJugador.innerHTML = SpanMascotaJugador

    }else if(InputPydos.checked) {

        SpanMascotaJugador.innerHTML = InputPydos.id

    }else {
        alert('Selecciona una mascota')
    }


    SeleccionarMascotaEnemiga()
}



function SeleccionarMascotaEnemiga() {


    let enemigo = aleatorio(1,6)

    let MascotaEnemigo = ""
    let SpanMascotaEnemigo =document.getElementById('MascotaEnemigo')

    if (enemigo==1) {

        MascotaEnemigo.innerHTML = 'Aqurium'

    }else if (enemigo==2) {

        MascotaEnemigo.innerHTML = 'Treevle'

    }else if (enemigo==3) {
        
        MascotaEnemigo.innerHTML = 'Fyre'

    }else if(enemigo==4) {
        
        MascotaEnemigo.innerHTML = 'Suprat'

    }else if(enemigo==5) {

        MascotaEnemigo.innerHTML = 'Monank'

    }else if(enemigo==6) {

        MascotaEnemigo.innerHTML = 'Pydos'    
    }

    SpanMascotaEnemigo.innerHTML = MascotaEnemigo

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
    
    let ParrafoResultado = document.getElementById('Resultado')
    let SpanVidasJugador = document.getElementById('VidasJugador')
    let SpanVidasEnemigo = document.getElementById('VidasEnemigo')
  
    let DivAtaqueDelJugador = document.getElementById('AtaqueDelJugador')
    let DivAtaqueDelEnemigo = document.getElementById('AtaqueDelEnemigo')

    SpanVidasJugador.innerHTML=VidasJugador
    SpanVidasEnemigo.innerHTML=VidasEnemigo
    
    let NuevoAtaqueDelJugador = document.createElement('p')
    let NuevoAtaqueDelEnemigo = document.createElement('p')

    ParrafoResultado.innerHTML = ResultadoBatalla
    NuevoAtaqueDelJugador.innerHTML = AtaqueJugador
    NuevoAtaqueDelEnemigo.innerHTML = enemigo


    DivAtaqueDelJugador.appendChild(NuevoAtaqueDelJugador)
    DivAtaqueDelEnemigo.appendChild(NuevoAtaqueDelEnemigo)
        
    
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
//Evalua las vidas
RevisarVidas()
}

function RevisarVidas() {

    if (VidasEnemigo == 0) {

        MensajeResultadoBatalla('Ganaste el juego! 🏆👾')
        
    }else if (VidasJugador == 0) {
        MensajeResultadoBatalla('Perdiste el juego 😣👾')
    }
    
}

function MensajeResultadoBatalla(ResultadoFinal) {
    
    let ParrafoResultado = document.getElementById('Resultado')
    let parrafo = document.createElement('p')

    ParrafoResultado.innerHTML = ResultadoBatalla
    

    ParrafoResultado.appendChild(parrafo)

    let BotonFuego = document.getElementById('BotonFuego')
    let BotonAgua = document.getElementById('BotonAgua')
    let BotonHierva = document.getElementById('BotonHierva')
    let BotonMascota = document.getElementById('Boton-Mascota')

    BotonMascota.disabled = true
    BotonFuego.disabled = true
    BotonAgua.disabled = true
    BotonHierva.disabled = true

let sectionReiniciar = document.getElementById('Reiniciar')
    sectionReiniciar.style.display = 'block'
}

function ReiniciarJuego() {
    
    location.reload()

}

window.addEventListener('load', IniciarJuego)