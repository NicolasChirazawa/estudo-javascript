var sexo = 'F';
var idade = 70;

switch (sexo){

    case "F":

        if (idade <= 61.5){
            console.log(`Uma mulher com menos de 61.5 anos não tem direito de recebe aposentadoria, como você tem ${idade} anos, não tem direito de receber`);
        }
        else{
            console.log(`Uma mulher com mais de 61.5 anos tem direito de recebe aposentadoria, como você tem ${idade} anos, tem direito de receber`);
        }
        break;

    case "M":

        if (idade < 65){
            console.log (`Um homem com menos de 65 anos não tem direito de recebe aposentadoria, como você tem ${idade} anos, não tem direito de receber`);
        }
        else{
            console.log (`Uma homem com mais de 65 anos tem direito de recebe aposentadoria, como você tem ${idade} anos, tem direito de receber`);
        }
        break;

    default:
        console.log("Informe um gênero válido");
        break;
}
