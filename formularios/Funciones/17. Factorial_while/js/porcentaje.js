/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/


let numero;

function factor(pnumero){
    numero = pnumero;
    let factorial;
    let contador;

    contador = 0;
    factorial = 1;

    while(contador < numero){
        contador = contador+1;
        factorial =factorial*contador;
    } 
    return factorial;
}

function FactorialNum(){
    let NumeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let factorial

    if(NumeroUno ){
        factorial = factor(NumeroUno)

        document.getElementById('resultados').innerHTML = `<strong>Factorial : ${factorial}</strong>`;
    } 
    else{
        document.getElementById('resultados').innerHTML = `<strong>debes digitar algun numero</strong>`
    }
    return false;
}