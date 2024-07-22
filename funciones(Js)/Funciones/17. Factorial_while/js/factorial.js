/**
 * Factorial de 5
 * Autor: Camilo andres losada
 * Fecha: 03/04/2024
 */

let numero;

//como paramétro



//Como Expresión

const factorExp = function (pnumero){
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
