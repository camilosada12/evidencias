/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function Areas(){
    let LadoUno = parseInt(document.getElementById('txtNumeroUno').value);
    let LadoDos = parseInt(document.getElementById('txtNumeroDos').value);
    let LadoTres = parseInt(document.getElementById('txtNumeroTres').value);
    let Respuesta
    let AreaUno
    let AreaDos
    let AreaTres

    AreaUno = LadoUno * LadoUno
    AreaDos = LadoDos * LadoDos
    AreaTres = LadoTres * LadoTres


    if (AreaUno == AreaDos && AreaUno == AreaTres && AreaDos == LadoTres){
      Respuesta = `<strong> las Areas son iguales </strong> <br>`
      document.getElementById('resultados').innerHTML = Respuesta;
    } else if (AreaUno > AreaDos && AreaUno > AreaTres) {
      Respuesta = `<strong> El Area Numero Uno ${AreaUno} es  mayor </strong> <br>`
      document.getElementById('resultados').innerHTML = Respuesta;
    } else if (AreaDos > AreaUno && AreaDos > AreaTres) {
      Respuesta = `<strong> El Area Numero Dos ${AreaDos} es  mayor </strong> <br>`
      document.getElementById('resultados').innerHTML = Respuesta;
    }else{
      Respuesta = `<strong> El Area Numero Tres ${AreaTres} es  mayor </strong> <br>`
      document.getElementById('resultados').innerHTML = Respuesta;
    }if(AreaUno && AreaDos && AreaTres){
      
    }else{
        document.getElementById('resultados').innerHTML = ` <strong> Rellena todas las casillas </strong>`;
    }
    return false
}
