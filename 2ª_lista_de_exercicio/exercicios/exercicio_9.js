// Escreva duas funções: 
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente. 
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(pares){
    return pares.reduce((acc, [chave, valor]) => {
        acc[chave] = valor;
        return acc;
    }, {});
}

function obejtoParaPares(obj){
    let array = [];

    for(let key in obj){
        array.push([key, obj[key]]);
    }
    return array;
}

let arrayPares = [
    ['nome', 'Maria'],
    ['idade', 19],
    ['estado', 'SP']
]

let objPares = {
    nome: 'André',
    idade: 19,
    estado: 'BA'
}

console.log(paresParaObjeto(arrayPares));
console.log(obejtoParaPares(objPares));
