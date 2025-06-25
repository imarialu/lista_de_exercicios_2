// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), 
// retornando resultados instantâneos em repetidas invocações.

function memoize(fn){
    const cache = {};

    return function(...args){
        const chave = JSON.stringify(args);

        if(cache[chave]){
            return cache[chave];
        }

        const resultado = fn(...args);
        cache[chave] = resultado;
        return resultado;
    }
}

function fatorial(n){
    return n *= n;
}

const fatorialMemoize = memoize(fatorial);

console.log(fatorialMemoize(16));
console.log(fatorialMemoize(16));

