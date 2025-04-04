//1. Somador de Números  
//Crie um algoritmo que solicite ao usuário quantos números ele quiser somar. A cada novo número digitado, o valor deve ser acumulado. Ao final, exiba o resultado total da soma.

let numero = parseInt(prompt('Quantos numeros você quer somar?'));
let Comparador = 0;
let soma = 0;

while( Comparador != numero){
    let bnumero = parseInt(prompt('Insira os numeros para somar'));
    soma = (soma+bnumero);
    Comparador++;
}

console.log(soma);


