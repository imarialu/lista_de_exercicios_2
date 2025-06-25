// Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, 
// retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo. 

function debounce(fn, delay){
    let timer = null;

    return function(...args){
      clearTimeout(timer);

      timer = setTimeout(() => {fn.apply(this, args)}, delay);
    }
}

function exibirFrase(frase){
   console.log(frase)
}

const fraseDebounce = debounce(exibirFrase, 2000);

console.log("A frase do dia é...: ");
fraseDebounce("Quem bate apanha, quem esquece nunquinha");