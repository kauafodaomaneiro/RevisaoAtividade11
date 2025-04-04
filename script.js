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

//2. Contagem Regressiva da NASA  
//Simule uma contagem regressiva para o lançamento de um foguete, partindo de 10 até 0, e ao final exiba a mensagem "Lançamento!".  
//Dica: estude a função `setInterval()` do JavaScrip

function contagemRegressiva(){
    let intervalo = setInterval(contagem, 1000);
    let regressiva = 10;
    function contagem(){
        if(regressiva >= 1){
            console.log(regressiva);
            regressiva--;
        }else{
            console.log('lançamento!');
            clearInterval(intervalo);
        }
    }
    
}

contagemRegressiva();

