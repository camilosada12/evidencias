/**
 * Contar hasta 5 con el ciclo while
 * Autor: Camilo andres losada
 * Fecha: 03/04/2024
 */

let numero;

//Como Paramétros

function contar(pnumero) {
    numero = pnumero;
    let contador = 0;
    let resultado = "";

    while (contador < numero) {
        contador = contador + 1;
        resultado +=  contador + "\n"; 
    }

    return resultado; 
}

//Como Expresión

const contarExp = function (pnumero) {
    numero = pnumero;
    let contador = 0;
    let resultado = "";

    while (contador < numero) {
        contador = contador + 1;
        resultado +=  contador + "\n"; 
    }

    return resultado; 
}