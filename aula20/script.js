// Criação de promessa

const myPromise = new Promise((resolve, reject) => {
    const nome = 'Carlos'

    if (nome === 'Gustavo') {
        resolve('Usuário Gustavo encontrado!')
    } else {
        reject('O usuário Gustavo não foi encontrado!')
    }
}) 

myPromise.then((data) =>{
    console.log(data)
})
