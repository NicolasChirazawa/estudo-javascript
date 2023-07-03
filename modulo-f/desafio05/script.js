var botaoAdicionar = window.document.querySelector("button#adicionar");
var botaoFinalizar = window.document.querySelector("button#finalizar");
var num = window.document.querySelector("input#iinicio");
var lista = window.document.querySelector("select");
var texto = window.document.querySelector("div#texto");

let valores = [];

botaoAdicionar.addEventListener("click", adicionar);
botaoFinalizar.addEventListener("click", finalizar);

function isNumero(n){

    if (Number(n) >= 0 && Number(n) <= 100){

        return true;

    } else {

        return false;
    }

}

function inLista(n, l){

    if (l.indexOf(Number(n)) != -1){

        return true;
    
    } else {

        return false;
    }
    
}

function adicionar(){
        
    if (isNumero(num.value) && !inLista(num.value, valores)) {

        var listaElemento = window.document.createElement("option");
        listaElemento.setAttribute("class", "opcao");
        lista.appendChild(listaElemento);

        listaElemento.innerHTML += `Valor ${Number(num.value)} adicionado`;
        
        valores.push(Number(num.value));

    } else{

        window.alert("Valor inválido ou já encontrado na lista.");
    }  
}

function finalizar(){
    
    valores.sort();

    if(valores.length != 0){
        
        var maiorValor = valores[0];
        var somaTotal = 0;

        for(var i = 0; i < valores.length; i++) {

            if(valores[i] > maiorValor){

                maiorValor = valores[i];
            }

            somaTotal += Number(valores[i]); 
        }

        texto.innerHTML = 
        
        `
        Ao todo temos ${valores.length} valores cadastrados <br>
        O maior valor informado foi ${maiorValor} <br>
        O menor valor informado foi ${valores[0]} <br>
        Somando todos os valores temos: ${somaTotal} <br>
        A média dos valores cadastrados é ${somaTotal/valores.length}
        `;

    } else{

        window.alert(`Não há valores registrados`);
    } 
}
