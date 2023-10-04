function criar() {
    let num = document.getElementById('tab')
    let tab = document.getElementById('seltab')
    if (num.value.length = 0 ) {
        window.alert('Por favor, escreva um número.')
    } else {   
        let n = Number(num.value)
        let c = 1

        while (c <= 10) {
            let item = document.createElement('option')
            item.txt = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
} 
