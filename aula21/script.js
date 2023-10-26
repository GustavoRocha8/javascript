// sintaxe 
function primeiraFuncao() {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Esperou isso aqui!")
            resolve()
        }, 1000)
    })
}