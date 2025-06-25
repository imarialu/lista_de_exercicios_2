// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort. 

function nomesOrdenados(arr){
    let copia = arr.slice();
    copia.sort((a, b) => a.preco - b.preco);

    let nomesProdutos = copia.map(prod => prod.nome);

    return nomesProdutos;
}

let produtos = [
    {nome: 'Sorvete', preco: 25},
    {nome: 'Chocolate', preco: 18},
    {nome: 'Bolo de abacaxi', preco: 27},
    {nome: 'Bolacha', preco: 4}
]

console.log(nomesOrdenados(produtos));