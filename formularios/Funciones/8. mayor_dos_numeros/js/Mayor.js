/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function DosNumeros(){
    let NumeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let NumeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let Respuesta

    if(NumeroUno > NumeroDos){
        Respuesta = `<strong> El Numero uno ${NumeroUno} es mayor al Numero Dos ${NumeroDos} </strong> <br>`
        document.getElementById('resultados').innerHTML = Respuesta;
    }else{
        Respuesta = `<strong> El Numero Dos ${NumeroDos} es mayor al Numero Uno ${NumeroUno} </strong> <br>`
        document.getElementById('resultados').innerHTML = Respuesta;
        if(NumeroUno && NumeroDos){

        }else{
            document.getElementById('resultados').innerHTML = ` <strong> Rellena todas las casillas </strong>`;
        }
    }
    return false
}