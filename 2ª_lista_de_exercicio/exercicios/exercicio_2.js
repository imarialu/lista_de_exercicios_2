// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. 
// Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. 

const prompt = require('prompt-sync')();

function gerarNumero(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let numeroAdivinhado = 0;
let numeroGerado = gerarNumero(1, 100);

while(true){
    numeroAdivinhado = Number(prompt("Informe o número: "));

    if(numeroAdivinhado < numeroGerado){
        console.log("Mais alto!");
    }else if(numeroAdivinhado > numeroGerado){
        console.log("Mais baixo!");
    }else{
        console.log(`Você acertou! O número é ${numeroGerado}`);
        break;
    }
}
