function IniciarJuego() {
    
    let BotonMascota = document.getElementById('Boton-Mascota')
    BotonMascota.addEventListener('click', SeleccionarMascota)
}

function SeleccionarMascota() {

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
    

}



window.addEventListener('load', IniciarJuego)