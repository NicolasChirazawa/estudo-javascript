var num = [5, 2, 8, 9, 3];

/*

Vetor:

0: 1° elemento
1: 2° elemento
2: 3° elemento
3: 4° elemento
...

*/

console.log(`O vetor tem ${num.length} elementos`);

console.log(`A forma padrão do vetor é:`);

console.log(`Nosso vetor é ${num}`);

console.log( );

//Possíveis formas de representação de um vetor:

/* Forma horrível: 

console.log(`Nosso vetor é ${num[0]}`);
console.log(`Nosso vetor é ${num[1]}`);
console.log(`Nosso vetor é ${num[2]}`);
console.log(`Nosso vetor é ${num[3]}`);
console.log(`Nosso vetor é ${num[4]}`);

*/

/* Via Loop

for (var i = 0 ; i < num.length ; i++) {

    console.log(`A posição ${i} tem o valor ${num[i]}`);
}

*/

for (let pos in num){

    console.log(`${num[pos]}`);
}

console.log( );

console.log(`Nosso vetor em ordem crescente é ${num.sort()}`);
//O array assume o valor do sort após o comando, pode conferir no próximo valor; 

console.log(`Agora o vetor assumiu os valores em ordem crescente como pode ver:`);
console.log(`${num}`);

let pos = num.indexOf(8);
console.log( );
console.log(`O valor 8 está na posição ${pos}`);
pos = num.indexOf(20);
console.log (`O valor 20 está na posição ${pos}, ou seja, ele não foi encontrado`);