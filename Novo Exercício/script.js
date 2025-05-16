function carregar(){
    var titulo = document.querySelector ('header h1')
    var texto = document.querySelector ('section#texto')
    var foto = document.querySelector ('section#foto img')
    var hora = new Date()
    var agora = hora.getHours()
    texto.innerHTML = `Agora são ${agora} horas`
    if (agora >= 0 && agora < 12) {
        titulo.innerHTML = 'Bom Dia!'
        imagem.src = 'imagem/dia.png'
    } else if (agora >= 12 && agora < 18) {
        titulo.innerHTML = 'Boa Tarde!'
        imagem.src = 'imagem/tarde.png'
    } else {
        titulo.innerHTML = 'Boa Noite!'
        imagem.src = 'imagem/noite.png'
    }
  }