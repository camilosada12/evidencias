/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

let tablaMulti;
let limite;

function tablas(ptablas,plimite){
    tablaMulti = ptablas;
    limite = plimite;
    let contador;
    let resultado;
    let msg = "";

    for(contador=1; limite >= contador; contador ++ ){

        resultado = tablaMulti * contador;

        msg += `${tablaMulti} x ${contador} = ${resultado} <br>`;
    }
    return msg;
}
function TablaFor(){
    let tablaMul = parseInt(document.getElementById('tabla').value);
    let LimiteMul = parseInt(document.getElementById('Limite').value);
    let tablaMultiplicar
    
   

    if(tablaMul && LimiteMul ){
        tablaMultiplicar = tablas(tablaMul , LimiteMul)

        document.getElementById('resultados').innerHTML = `<strong> ${tablaMultiplicar}</strong>`;
    } 
    else{
        document.getElementById('resultados').innerHTML = `<strong> debes digitar algun numero</strong>`
    }
    return false;
}