/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/
let par = 0;
let impar = 0;
// Como paramétros

function tablas(ptabla, plimite, plimiteT) {
  let tabla;
  let limite;
  let limiteT;

  let contador;
  let resultado;
  let msg = "";
  tabla = ptabla;
  limite = plimite;
  limiteT = plimiteT;

  while (tabla < limite) {
    contador = 0;
    tabla = tabla + 1;

    while (contador < limiteT) {
      contador = contador + 1;
      resultado = tabla * contador;
      msg += `<br> ${tabla} x ${contador} = ${resultado}`;
      msg += validar(resultado);
    }
    msg += "<br>";
  }
  return (
    msg + "<br>" + "total de pares: " + par + "<br>" + "total de impares " + impar
  );
}

function validar(resultado) {
  if (resultado % 2 == 0) {
    par = par + 1;
    return " Buzz";
  } else {
    impar = impar + 1;
    return " Bass";
  }
}

function TablaWhile(){
    let tablaMul = parseInt(document.getElementById('tabla').value);
    let LimiteMul = parseInt(document.getElementById('Limite').value);
    let finish = parseInt(document.getElementById('fin').value);
    let tablaMultiplicar
    
   

    if(tablaMul && LimiteMul && finish ){
        tablaMultiplicar = tablas(tablaMul , LimiteMul, finish)

        document.getElementById('resultados').innerHTML = `<strong> ${tablaMultiplicar}</strong>`;
    } 
    else{
        document.getElementById('resultados').innerHTML = `<strong> debes digitar algun numero</strong>`
    }
    return false;
}