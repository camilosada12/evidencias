/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/


let tablas;
let limite;

function tabla(ptablas,plimite){

    tablas = ptablas;
    limite = plimite;

    let contador = 0;
    let resultado;
    let msg = "";

    while (contador < limite) {

        contador = contador +1;
        resultado = tablas * contador; 

        msg += `${tablas} x ${contador} = ${resultado} <br>` 
    }

    return msg;
}

function tablaExp(){
    let tablaMul = parseInt(document.getElementById('tabla').value);
    let LimiteMul = parseInt(document.getElementById('Limite').value);
    let tablaMultiplicar
    
   

    if(tablaMul && LimiteMul ){
        tablaMultiplicar = tabla(tablaMul , LimiteMul)

        document.getElementById('resultados').innerHTML = `<strong> ${tablaMultiplicar}</strong>`;
    } 
    else{
        document.getElementById('resultados').innerHTML = `<strong>debes digitar algun numero</strong>`
    }
    return false;
}