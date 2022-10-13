const mostrarSobre = document.getElementById ('sobre')
const mostrarRedes = document.getElementById ('redes')

const selecionarAba = document.querySelectorAll ('.aba')

function sumirAba () {
    selecionarAba.classList.remove = ('selecionado')
}

function aparecerAba () {
    selecionarAba.classList.add = ('selecionado')
}

mostrarSobre.addEventListener ('click', () => {
    
})

mostrarRedes.addEventListener ('click', () => {
    sumirAba ()
})
