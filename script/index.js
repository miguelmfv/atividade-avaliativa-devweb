var submit = document.querySelector('#enviar')

function mostraralerta() {
    alert("Reserva feita com sucesso!")
}



var chk = document.getElementById('chk')
var parag = document.getElementsByClassName('.parag')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
})

chk.addEventListener('change', () => {
    document.getElementsbyClass('.parag').classList.toggle('dark') // consegui fazer um paragrafo por pagina ficar com letra branca, com o queryselectorALL ele não troca nada
})

