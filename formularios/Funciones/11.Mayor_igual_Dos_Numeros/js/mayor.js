/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function MayorDos(){
    let NumeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let NumeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let Respuesta

    if(NumeroUno == NumeroDos && NumeroDos == NumeroUno){
        Respuesta = `<strong> Los 2 Numeros son iguales </strong> <br>`
        document.getElementById('resultados').innerHTML = Respuesta;
    }else if(NumeroUno > NumeroDos){
      Respuesta = `<strong> El Numero Uno ${NumeroUno} es el numero mayor </strong> <br>`
      document.getElementById('resultados').innerHTML = Respuesta;
    }else{
      Respuesta = `<strong> El Numero Dos ${NumeroDos} es el numero mayor </strong> <br>`
      document.getElementById('resultados').innerHTML = Respuesta;
    }if(NumeroUno && NumeroDos){
      
    }else{
        document.getElementById('resultados').innerHTML = ` <strong> Rellena todas las casillas </strong>`;
    }
    return false
}
