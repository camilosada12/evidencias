/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function MayorDeTres(){
    let NumeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let NumeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let NumeroTres = parseInt(document.getElementById('txtNumeroTres').value);
    let Respuesta

    if(NumeroUno == NumeroDos && NumeroUno == NumeroTres){
        Respuesta = `<strong> Los 3 Numeros son iguales </strong> <br>`
        document.getElementById('resultados').innerHTML = Respuesta;
    }else if(NumeroUno > NumeroDos && NumeroUno > NumeroTres ){
        Respuesta = `<strong> El Numero Uno ${NumeroUno} es el numero mayor </strong> <br>`
        document.getElementById('resultados').innerHTML = Respuesta;
    }else if(NumeroDos > NumeroUno && NumeroDos > NumeroTres){
        Respuesta = `<strong> El Numero Dos ${NumeroDos} es el numero mayor </strong> <br>`
        document.getElementById('resultados').innerHTML = Respuesta;
    }else if(NumeroTres > NumeroUno && NumeroTres > NumeroDos){
        Respuesta = `<strong> El Numero Tres ${NumeroTres} es el numero mayor </strong> <br>`
        document.getElementById('resultados').innerHTML = Respuesta;
    }else if(NumeroUno && NumeroDos && NumeroTres){

    }else{
        document.getElementById('resultados').innerHTML = ` <strong> Rellena todas las casillas </strong>`;
    }
    return false
}
