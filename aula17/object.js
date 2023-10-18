// Objetos

let pessoa = {
    nome: "Gustavo",
    idade: 18,
    feliz: true,
    pets: ["cachorro", "coelho"],
    carros: {
        camaro: {
            placa: "123456",
            cor: "preto"
        },
        uno: {
            placa: "987640",
            cor: "branco"
        }
    },
    andar: function(km) {
        alert(pessoa.nome+" andou "+km+" km")
    }
}
pessoa.andar(30)

console.log(pessoa.carros.uno.cor);