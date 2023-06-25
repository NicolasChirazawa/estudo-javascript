var botao = window.document.getElementById("botao");
botao.addEventListener("click", contagem); 

function contagem(){

    var inicioDiv = window.document.querySelector("input#iinicio").value;
    var finalDiv = window.document.querySelector("input#ifinal").value;
    var passoDiv = window.document.querySelector("input#ipasso").value;
    var numeroProcesso = Number(inicioDiv);
    var resultado = window.document.querySelector("div#frase");

    if (inicioDiv === "" || finalDiv === "" || passoDiv === "") {
        //Caixas vazias
        resultado.innerHTML = `Impossível calcular`;

    }else{

        if (passoDiv == 0){

            //Passo igual a 0 resolvido
            window.alert (`Passo inválido, considerando PASSO IGUAL A 1`);
            passoDiv = 1;
        }

        resultado.innerHTML = `Contando...<br>${numeroProcesso} 👉 `;

        //Passo maior que 0
        while(numeroProcesso < Number(finalDiv) && passoDiv > 0) {

            if(numeroProcesso + Number(passoDiv) <= Number(finalDiv)) {

                numeroProcesso += Number(passoDiv);
                resultado.innerHTML += `${numeroProcesso} 👉`;
            
            } else {

                break;

            }

        }

        //Passo menor que 0
        while(numeroProcesso > Number(finalDiv) && passoDiv < 0) {

            if(numeroProcesso + Number(passoDiv) >= Number(finalDiv)) {
        
                numeroProcesso += Number(passoDiv);
                resultado.innerHTML += `${numeroProcesso} 👉`;
                    
            } else {
        
                break;
        
            }
        }

        resultado.innerHTML += `🏁`;
    }
}
