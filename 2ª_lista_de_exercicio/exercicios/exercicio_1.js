// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário. 

const prompt = require('prompt-sync')();

let dia = Number(prompt("Informe o dia: "));
let mes = Number(prompt("Informe o mês: "));
let ano = Number(prompt("Informe o ano: "));

function ehDataValida(dia, mes, ano){
   const diaMes = [31, 30, 29, 28];

   if(mes < 1 && mes > 12){
      return false;
   }

   if(mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
      return dia >= 1 && dia <= diaMes[0];
   }else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
      return dia >= 1 && dia <= diaMes[1];
   }

   if((ano % 4 === 0) && (ano % 100 !== 0)){
      if(mes === 2){
         return dia >= 1 && dia <= diaMes[2];
      }
   }else{
      if(mes === 2){
         return dia >= 1 && dia <= diaMes[3];
      }
   }
}

if(ehDataValida(dia, mes, ano)){
   console.log("Essa data é válida!")
}else{
   console.log("Essa data é inválida.")
}

ehDataValida(dia, mes, ano);
