//Calcular fatorial -> 5! = 5 . 4 . 3 . 2 . 1

function fatorial (n){
 
    if (n < 0){

        return "Insira um valor válido";
    }

    else if (n === 0){

        return 1;
    }

    else{

        var resultado = 1; 

        for (var i = 1; i <= n ; i++){

            resultado *= i;
        }

        return resultado;
    }
}

let res = fatorial(-2);
console.log(`${res}`);