const json = [
    {
        "nome": "Gustavo",
        "idade": 18,
        "esta_trabalhando": true,
        "detalhes_profissão": {
        "profissao": "Programador",
        "empresa": "Empresa X"

    },
        "hobbies": ['Vôlei', 'Academia', 'Bike', 'Ler'],
    },
    {
            "nome": "Alex",
            "idade": 18,
            "esta_trabalhando": false,
            "detalhes_profissão": {
            "profissao": null,
            "empresa": null,
    
        },
            "hobbies": ['Jogar', 'Academia'],
    },
]



// JSON
// converter objeto para json
const jsonData = JSON.stringify(json)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome)

})