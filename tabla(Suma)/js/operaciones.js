/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function operaciones(){
    let NumeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let NumeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let sumar;
    let restar;
    let multiplicar;
    let dividir; 
    let rsuma;
    let rresta;
    let rmultiplicacion;
    let rdivision;

    sumar = NumeroUno + NumeroDos;
    restar = NumeroUno - NumeroDos;
    multiplicar = NumeroUno * NumeroDos;
    dividir = NumeroUno / NumeroDos;

    rsuma = `suma de dos numeros ${sumar} <br>`
    rresta = `resta de dos numeros ${restar} <br>`
    rmultiplicacion = `multiplicacion de dos numeros ${multiplicar} <br>`
    rdivision = `division de dos numeros ${dividir} <br>`


    document.getElementById('resultados').innerHTML = rsuma + rresta + rmultiplicacion + rdivision;

    return false;
}