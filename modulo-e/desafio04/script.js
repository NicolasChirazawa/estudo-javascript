var botao = window.document.querySelector("button#botao");
botao.addEventListener("click", executarTabuada)

function executarTabuada(){

    var divValorTabuada = window.document.getElementById("inumero").value;
    var divElementoTabuada = window.document.getElementById("itabuada");
    var divElementoLista = window.document.createElement("option");

    if (divValorTabuada === ""){

        window.alert("Insira um valor na caixa Número");

    } else {
       
        divElementoTabuada.innerHTML = "";
        
        for (var i = 1; i <= 10; i++){

            var divElementoLista = window.document.createElement("option");
            divElementoLista.setAttribute("id", "option");
            divElementoTabuada.appendChild(divElementoLista);

            divElementoLista.innerHTML += `${divValorTabuada} X ${i} = ${divValorTabuada * i}`; 
        }
    }
}