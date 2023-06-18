function carregar(){

    var agora = new Date();
    var horas = agora.getHours();

    var frase = window.document.getElementById("msg");
    msg.innerHTML = `<strong>Agora são ${horas} horas</strong>`;

    var img = window.document.getElementById("imagem");

    if(horas >= 0 && horas < 6){

        document.body.style.backgroundColor = "#5b456b";
        img.src = "imagens/noite.jpg";
    }

    else if(horas < 12){

        document.body.style.backgroundColor = "#ffba5c";
        img.src = "imagens/manha.jpg";
    }

    else if (horas < 18){

        document.body.style.backgroundColor = "#e08e7c";
        img.src = "imagens/tarde.jpg";
    }

    else if (horas < 24){

        document.body.style.backgroundColor = "#5b456b";
        img.src = "imagens/noite.jpg";
    }

    else{

        window.alert("[ERRO] Hora encontrada não é uma opção válida");
    }
}

carregar();