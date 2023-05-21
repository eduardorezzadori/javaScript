let contador = 0

const display = document.getElementById('display')
const btnDecrement = document.getElementById('btn-decrement')
const btnRestart = document.getElementById('btn-restart')
const btnIncrement = document.getElementById('btn-increment')

btnDecrement.onclick = () => {
    contador--
    atualizaDisplay(contador)
}

btnRestart.onclick = () => {
    contador = 0
    atualizaDisplay(contador)
}

btnIncrement.onclick = () => {
    contador++
    atualizaDisplay(contador)
}

function atualizaDisplay(contador) {
    display.innerHTML = `${contador}`
}