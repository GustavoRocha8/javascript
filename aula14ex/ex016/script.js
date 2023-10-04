function contar() {
    let ini = document.getElementById('txtin')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Não é possivel contar!')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{270F} `
        }

         
    } 
    

}
