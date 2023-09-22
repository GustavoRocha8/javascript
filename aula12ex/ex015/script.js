function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifica os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                // CRIANÇA
                img.setAttribute('src', 'fotomanha.png')
            } else if (idade < 21) {
                // JOVEM
            } else if (idade < 50) {
                // ADULTO
            } else {
                // IDOSO
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                // CRIANÇA
            } else if (idade < 21) {
                // JOVEM
            } else if (idade < 50) {
                // ADULTO
            } else {
                // IDOSO
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.` 
        res.appendChild(img)       
    }
}