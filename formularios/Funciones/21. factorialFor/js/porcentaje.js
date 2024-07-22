/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

let numero;
 

function factor(pnumero){

    numero = pnumero;
    let factorial = 1;
    let contador;
    
    for(contador = 1;  numero >= contador; contador++){

        factorial = factorial * contador;
    }
    
    return factorial;
}

function FactorialNum(){
    let FactorialNumero = parseInt(document.getElementById('Factorial').value);
    let FactorialNumber
    
   

    if(FactorialNumero ){
        FactorialNumber = factor(FactorialNumero)

        document.getElementById('resultados').innerHTML = `<strong> ${FactorialNumber}</strong>`;
    } 
    else{
        document.getElementById('resultados').innerHTML = `<strong>debes digitar algun numero</strong>`
    }
    return false;
}