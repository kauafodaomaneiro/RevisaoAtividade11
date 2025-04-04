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

//3. Balanço Financeiro Anual  
//Crie um algoritmo que solicite o ganho bruto e os gastos mensais de uma empresa durante os 12 meses do ano. Ao final, exiba:  
//- Total de ganhos  
//- Total de gastos  
//- Saldo final  
//- E uma mensagem informando se a empresa teve lucro ou prejuízo no ano

let ganhoBruto = prompt('Qual foi o ganho bruto da empresa?');
let gastosMensais = prompt('E os gastos mensais?');

function balancoFinanceiro (ganhoBruto, gastosMensais){
   let totalGanho = (ganhoBruto * 12);
    let totalGasto = (gastosMensais * 12);
    let saldoFinal = (totalGanho - totalGasto);

    if(totalGasto >= saldoFinal){
        console.log('O saldo final da empresa foi de: ' + saldoFinal);
        console.log('A empresa teve prejuízo no ano.');
    }else{
        console.log('O saldo final da empresa foi de: ' + saldoFinal);
        console.log('A empresa teve lucro no final do ano.');
    }
}

balancoFinanceiro(ganhoBruto,gastosMensais);