function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var header = window.document.getElementById('header')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 10
    msg.innerHTML = `Agora são <strong>${hora}:${minuto}</strong> horas.`   
    if (hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#fabf5b'
        header.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#fe7c02'
        header.innerHTML = 'Boa tarde!'
    } else {
        // Boa noite!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#877569'
        header.innerHTML = 'Boa noite!'
    }
}