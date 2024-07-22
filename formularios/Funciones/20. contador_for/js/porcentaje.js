/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

let numero;

function contar(pnumero){
    numero = pnumero;
    let contador;
    let resultado = "";

    for(contador = 1; numero >= contador; contador ++){

        resultado += contador+ "<br>";
    }
    return resultado;
}

function contadorNumeros(){
    let NumeroUno = parseInt(document.getElementById('contador').value);
    let contadorNum
    
   

    if(NumeroUno ){
        contadorNum = contar(NumeroUno)

        document.getElementById('resultados').innerHTML = `<strong> ${contadorNum}</strong>`;
    } 
    else{
        document.getElementById('resultados').innerHTML = `<strong>debes digitar algun numero</strong>`
    }
    return false;
}