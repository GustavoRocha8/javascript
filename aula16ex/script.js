let num = document.getElementById('nmtxt')
let lista = document.getElementById('selnum')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    } 

}

function finalizar() {

}
