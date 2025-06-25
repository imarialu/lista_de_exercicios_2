// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total. 

function acumulaTotal(arr){
    return arr.reduce((acc, venda) => {
        acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
        return acc;
    }, {});
}

let vendas = [
    {cliente: 'Maria', total: 55},
    {cliente: 'André', total: 92},
    {cliente: 'Jade', total: 15},
    {cliente: 'Maria', total: 260},
    {cliente: 'André', total: 88},
    {cliente: 'Jade', total: 300}
]

console.log(acumulaTotal(vendas));
