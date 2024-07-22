/**
 * Numeros del 1 hasta el 10
 * Autor : Camilo Andres losada Ramirez
 * Fecha : 8/07/2024
 */

let arreglo = [];
let iteracion;
let resultaLista = '';
let numero;
let factorial = 1;

arreglo = [1,2,3,4,5,6,7,8,9,10];

for (iteracion = 0; iteracion < arreglo.length; iteracion++){
    resultaLista += '<option>'+arreglo[iteracion]+'</opcion>';
}

document.getElementById('lista-numeros').innerHTML = resultaLista;

arreglo = [];

for (iteracion = 0; iteracion < 10; iteracion++){
   numero = iteracion +1
   arreglo.push(numero)
}

resultaLista = '';

for (iteracion = 0; iteracion < arreglo.length; iteracion++){
    resultaLista += '<option>'+arreglo[iteracion]+'</opcion>';
}

document.getElementById('lista-dos-numeros').innerHTML = resultaLista;

// factorial

arreglo = []

for (iteracion = 0; iteracion < 5 ; iteracion++){
   numero = iteracion +1
   factorial = factorial * numero
   arreglo.push(factorial)
}

resultaLista = '';

for (iteracion = 0; iteracion < arreglo.length; iteracion++){
    resultaLista += '<tr><th scope="row">'+arreglo[iteracion]+'</th></tr>';

}

document.getElementById('lista-tres-numeros').innerHTML = resultaLista;