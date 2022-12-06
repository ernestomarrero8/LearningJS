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

    if (Turtle.checked) {

        alert('Seleccionaste la mascota Turtle')

    }else if (Treevle.checked) {

        alert('Seleccionaste la mascota Treevle')

    }else if (Fyre.checked) {

        alert('Seleccionaste la mascota Fyre')

    }else if(Suprat.checked) {

        alert('Seleccionaste la mascota Suprat')
    }else if(Ank.checked) {

        alert('Seleccionaste la mascota Ank')
    }else if(Pydos.checked) {

        alert('Seleccionaste la mascota Pydos')
    }else {
        alert('Debes seleccionar una mascota')
    }
    

}



window.addEventListener('load', IniciarJuego)