const mostrarAba = document.querySelectorAll ('.aba')
const mostrarInfo = document.querySelectorAll ('.informacao')

mostrarAba.forEach ((aba) => {
    aba.addEventListener ('click', () => {
        if (aba.classList.contains ('selecionado')) {
            return
        }
        const elementoSelecionado = document.querySelector ('.selecionado')
        elementoSelecionado.classList.remove ('selecionado')

        mostrarInfo.forEach ((info) => {
            if (info.classList.contains ('selecionado')) {
                info.classList.remove ('selecionado')
            } else {
                aba.classList.add ('selecionado')
                info.classList.add ('selecionado')
            }
        })
    })
})
