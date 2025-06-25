// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array. 

const prompt = require('prompt-sync')();

let frase = prompt("Insira a frase que deseja separar: ");

let listaPalavras = frase.toLowerCase().split(" ");
let palavrasUnicas = [];

for(let palavra of listaPalavras){
    if(!palavrasUnicas.includes(palavra)){
        palavrasUnicas.push(palavra);
    }
}

console.log(palavrasUnicas);
