let ArrayMonsters =[]
let Botones =[]
let arrayAtaqueJugador = []
let AtaquesMonstruoEnemigo = []
let OpcionDeMascota
let InputAqurium
let InputTreevle
let InputFyre
let InputSuprat
let InputMonank
let InputPydos
let AtaqueJugador
let enemigo
let jugador
let IdAtaqueJugador
let IdAtaqueEnemigo
let ResultadoBatalla
let MascotaJugador
let enemigoAleatorio
let Attack
let MonsterAttack
let BotonFuego 
let BotonAgua 
let BotonHierva
let IndexAtaqueJugador =[]
let IndexAtaqueEnemigo
let VictoriasJugador = 0
let VictoriasEnemigo = 0

const ContenedorAtaques = document.getElementById('ContenedorAtaques')
const BotonMascota = document.getElementById('Boton-Mascota')
const SpanMascotaEnemigo =document.getElementById('MascotaEnemigo')
const ContenedorTarjetas = document.getElementById('DivTarjetas')
const sectionReiniciar = document.getElementById('Reiniciar')
const parrafo = document.createElement('p')
const BotonReiniciar = document.getElementById('Boton-Reiniciar')
const DivAtaqueDelJugador = document.getElementById('AtaqueDelJugador')
const DivAtaqueDelEnemigo = document.getElementById('AtaqueDelEnemigo')
const ParrafoResultado = document.getElementById('Resultado')
const SpanVictoriasJugador = document.getElementById('VictoriasJugador')
const SpanVictoriasEnemigo = document.getElementById('VictoriasEnemigo')


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

ArrayMonsters.push(Aqurium,Treevle,Fyre,Suprat,Monank,Pydos)

    Aqurium.ataques.push(
        { NombreAtaque: 'Lluvia congelada🌧️',id:'Boton-Agua'},
        { NombreAtaque: 'Hojas Cortantes🍃',id:'Boton-Hierva'}
    )
    Treevle.ataques.push(
        { NombreAtaque: 'Hojas Cortantes🍃',id:'Boton-Hierva'},
        { NombreAtaque: 'Llamarada 🔥',id:'Boton-Fuego'},
    )
    Fyre.ataques.push(
        { NombreAtaque: 'Llamarada 🔥',id:'Boton-Fuego'},
        { NombreAtaque: 'Lluvia congelada🌧️',id:'Boton-Agua'}
    )
    Suprat.ataques.push(
        { NombreAtaque: 'Lluvia congelada🌧️',id:'Boton-Agua'},
        { NombreAtaque: 'Hojas Cortantes🍃',id:'Boton-Hierva'},
        { NombreAtaque: 'Llamarada 🔥',id:'Boton-Fuego'}
        
    )
    Monank.ataques.push(
        { NombreAtaque: 'Lluvia congelada🌧️',id:'Boton-Agua'},
        { NombreAtaque: 'Hojas Cortantes🍃',id:'Boton-Hierva'},
        { NombreAtaque: 'Llamarada 🔥',id:'Boton-Fuego'}
    )
    Pydos.ataques.push(
        { NombreAtaque: 'Lluvia congelada🌧️',id:'Boton-Agua'},
        { NombreAtaque: 'Llamarada 🔥',id:'Boton-Fuego'}
    )
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
        MascotaJugador = InputAqurium.id
    }else if (InputTreevle.checked) {
        SpanMascotaJugador.innerHTML = InputTreevle.id
        MascotaJugador = InputTreevle.id
    }else if (InputFyre.checked) {
        SpanMascotaJugador.innerHTML = InputFyre.id
        MascotaJugador = InputFyre.id
    }else if(InputSuprat.checked) {
        SpanMascotaJugador.innerHTML = InputSuprat.id
        MascotaJugador = InputSuprat.id
    }else if(InputMonank.checked) {
        SpanMascotaJugador.innerHTML = InputMonank.id
        MascotaJugador = InputMonank.id
    }else if(InputPydos.checked) {
        SpanMascotaJugador.innerHTML = InputPydos.id
        MascotaJugador = InputPydos.id
    }else {
        alert('Selecciona una mascota')
        location.reload()
    }
    
    ExtraerAtaques(MascotaJugador)
    MostrarAtaques(Attack)
    SeleccionarMascotaEnemiga()
}
function ExtraerAtaques(MascotaJugador) {
    for (let i = 0; i < ArrayMonsters.length; i++) {
        if (MascotaJugador == ArrayMonsters[i].nombre) {
        Attack = ArrayMonsters[i].ataques
        }
    }
    
}
function MostrarAtaques(Attack){
    Attack.forEach((Ataque) => {
        MonsterAttack = `                       
        <button id=${Ataque.id} class="BotonAtaque BotonDeAtaque">${Ataque.NombreAtaque}</button>
        `
        ContenedorAtaques.innerHTML += MonsterAttack
    })
    BotonFuego = document.getElementById('Boton-Fuego')
    BotonAgua = document.getElementById('Boton-Agua')
    BotonHierva = document.getElementById('Boton-Hierva')
    Botones = document.querySelectorAll('.BotonDeAtaque')
   
}

function SecuenciaAtaque() {
    Botones.forEach((boton) => {
        boton.addEventListener('click',(e)=> {
            console.log(e)
            if(e.target.innerText==='Llamarada 🔥'){
             arrayAtaqueJugador.push('Llamarada 🔥')
            console.log(arrayAtaqueJugador)
            boton.style.background = '#f112'            
            } else if (e.target.innerText==='Lluvia congelada🌧️') {
                arrayAtaqueJugador.push('Lluvia congelada🌧️')
                console.log(arrayAtaqueJugador)
                boton.style.background = '#f112'
            } else {
                arrayAtaqueJugador.push('Hojas Cortantes🍃')
                console.log(arrayAtaqueJugador)
                boton.style.background = '#f112'
            }
            AtaqueAleatorioEnemigo()
        })
    })
    
}
function SeleccionarMascotaEnemiga() {  
    enemigoAleatorio = aleatorio(0,ArrayMonsters.length -1)
    SpanMascotaEnemigo.innerHTML = ArrayMonsters[enemigoAleatorio].nombre
    AtaquesMonstruoEnemigo = ArrayMonsters[enemigoAleatorio].ataques
    SecuenciaAtaque()
}

function AtaqueAleatorioEnemigo() {
    enemigo = aleatorio(0,ArrayMonsters.length -1)

    if (enemigo == 0) {  
        AtaquesMonstruoEnemigo.push = 'Llamarada 🔥'
        IdAtaqueEnemigo = 1
    }if (enemigo == 2) {
        AtaquesMonstruoEnemigo.push = 'Lluvia congelada🌧️'
        IdAtaqueEnemigo = 2
    } else {
        AtaquesMonstruoEnemigo.push = 'Hojas Cortantes🍃'
        IdAtaqueEnemigo = 3
    }
    console.log(enemigo)
    IniciarPelea()
    
}
function IniciarPelea() {
    if (arrayAtaqueJugador.length === 3|| arrayAtaqueJugador.length ===2) {
        Combate()
    }
}

function IndexAmbosOponentes(jugador,enemigo) {
    IndexAtaqueJugador = arrayAtaqueJugador.NombreAtaque[jugador]
    IndexAtaqueEnemigo = AtaquesMonstruoEnemigo.ataques[enemigo]
    
}

function Combate() {

    for (let index = 0; index < arrayAtaqueJugador.length; index++) {
        if (arrayAtaqueJugador[index]=== AtaquesMonstruoEnemigo[index]) {
            IndexAmbosOponentes(index,index)
            CrearMensaje('Empate🔥🌧️🍃')
            VictoriasJugador++
            SpanVictoriasJugador.innerHTML=VictoriasJugador
        }else if (arrayAtaqueJugador[index] == 'Llamarada 🔥' && AtaquesMonstruoEnemigo[index] == 'Hojas Cortantes🍃') {
            IndexAmbosOponentes(index,index)
            CrearMensaje = ('Ganaste 🏆✌🏽')
            VictoriasJugador++
            SpanVictoriasJugador.innerHTML=VictoriasJugador
            SpanMascotaEnemigo.innerHTML = VictoriasEnemigo
        }else if (ArrayMonsters.NombreAtaque == 'Hojas Cortantes🍃' && AtaquesMonstruoEnemigo.ataques == 'Lluvia congelada🌧️') {
            IndexAmbosOponentes(index,index)
            CrearMensaje = ('Ganaste 🏆✌🏽')
            VictoriasJugador++
            SpanVictoriasJugador.innerHTML=VictoriasJugador
        }else if (ArrayMonsters.NombreAtaque == 'Lluvia congelada🌧️' && AtaquesMonstruoEnemigo.ataques == 'Llamarada 🔥') {
            IndexAmbosOponentes(index,index)
            CrearMensaje = ('Ganaste 🏆✌🏽')
            VictoriasJugador++
            SpanVictoriasJugador.innerHTML=VictoriasJugador
            
        }else {
            IndexAmbosOponentes(index,index)
            CrearMensaje('Perdiste 😣👾')
            VictoriasEnemigo++
            SpanMascotaEnemigo.innerHTML= VictoriasEnemigo
        }
    }
    
    RevisarVictorias()
}
    
function CrearMensaje(ResultadoBatalla) {   
    SpanVictoriasJugador.innerHTML=VictoriasJugador
    SpanVictoriasEnemigo.innerHTML=VictoriasEnemigo
    
    let NuevoAtaqueDelJugador = document.createElement('p')
    let NuevoAtaqueDelEnemigo = document.createElement('p')

    ParrafoResultado.innerHTML = ResultadoBatalla
    NuevoAtaqueDelJugador.innerHTML = IndexAtaqueJugador
    NuevoAtaqueDelEnemigo.innerHTML = IndexAtaqueEnemigo

    DivAtaqueDelJugador.appendChild(NuevoAtaqueDelJugador)
    DivAtaqueDelEnemigo.appendChild(NuevoAtaqueDelEnemigo)
}

function RevisarVictorias() {

    if (VictoriasJugador == VictoriasEnemigo) {

        CrearMensaje ('Esto fue un empate ✌🏽')

        
    }else if (VictoriasJugador >VictoriasEnemigo) {
        CrearMensaje('Ganaste el juego! 🏆👾')
        
    }else{
        CrearMensaje('Perdiste el juego 😣👾')
    }
    
}
function MensajeResultadoBatalla(ResultadoBatalla) {
    
    
    let parrafo = document.createElement('p')

    ParrafoResultado.innerHTML = ResultadoBatalla
    

    ParrafoResultado.appendChild(parrafo)

    

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