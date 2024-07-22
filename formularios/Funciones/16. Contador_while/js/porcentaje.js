/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/


function contar(pnumero){
    let numero
    numero = pnumero;
    let contador = 0;
    let resultado = "";

    while (contador < numero) {
        contador = contador + 1;
        resultado +=  contador + "\n"; 
    }

    return resultado; 
}

function contardorNumeros(){
    let NumeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let contador

    if(NumeroUno ){
        contador = contar(NumeroUno)

        document.getElementById('resultados').innerHTML = `<strong>Contador : ${contador}</strong>`;
    } 
    else{
        document.getElementById('resultados').innerHTML = `<strong>debes digitar algun numero</strong>`
    }
    return false;
}