
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    //var hora = 19
    msg.innerText = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha280.png'
        document.body.style.background = '#b9c7c7'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'tarde280.png'
        document.body.style.background = '#fa9742'
    }else {
        //Boa noite
        img.src = 'noite280.png'
        document.body.style.background = '#022730'
    }
}
//022730