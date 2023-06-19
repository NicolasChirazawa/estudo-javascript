botao = window.document.querySelector("button#botao");
botao.addEventListener("click", trocarImg);

function trocarImg(){

    var data = new Date();
    var anoAgr = data.getFullYear();
    var anoNasc = window.document.getElementById("iano").value;

    var resultado = window.document.getElementById("frase");

    var img = window.document.createElement("img");
    //criando um atributo (id)
    img.setAttribute("id", "foto");

    if (anoNasc.length == 0 || anoNasc > anoAgr){
        window.alert("[ERRO] Verifique os dados e tente novamente");
    }

    else {
        var sexo = window.document.getElementsByName("radsex");
        var idade = Number(anoAgr) - Number(anoNasc);
        var genero = "";

        if (sexo[0].checked){
            genero = "Homem";

            if(idade >= 0 && idade <= 10){
                img.setAttribute("src", "imagens/bebe-h.jpg")
            }

            else if (idade <= 21){
                img.setAttribute("src", "imagens/jovem-h.jpg")
            }

            else if (idade <= 50){
                img.setAttribute("src", "imagens/adulto-h.jpg")
            }

            else {
                img.setAttribute("src", "imagens/idoso-h.jpg");
            }

        }

        else if (sexo[1].checked){

            genero = "Mulher";

            if(idade >= 0 && idade <= 10){
                img.setAttribute("src", "imagens/bebe-f.jpg")
            }

            else if (idade <= 21){
                img.setAttribute("src", "imagens/jovem-f.jpg")
            }

            else if (idade <= 50){
                img.setAttribute("src", "imagens/adulto-f.jpg")
            }

            else {
                img.setAttribute("src", "imagens/idoso-f.jpg");
            }
        }

        resultado.style.textAlign = "Center";
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img);
    }
}