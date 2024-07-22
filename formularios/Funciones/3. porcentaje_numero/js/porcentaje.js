/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function porcentaje(){
    let NumeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let porcentaje;
    let rpocentaje

    porcentaje = NumeroUno / 100;

    if(porcentaje ){
        rpocentaje = `<strong>porcentaje : ${porcentaje}</strong>`

        document.getElementById('resultados').innerHTML = rpocentaje;
    } 
    else{
        document.getElementById('resultados').innerHTML = `<strong>debes digitar algun numero</strong>`
    }
    return false;
}