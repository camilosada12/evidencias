/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/
let par = 0;
let impar = 0;
let resultado;

function tablas(ptabla, plimite,plimiteT) {
  
  let limite;
  let limiteT;
  let tabla;
  let contador;
  let msg = "";
  
  tabla = ptabla;
  limite = plimite;
  limiteT = plimiteT
  
  for (tabla = 1; limite >= tabla; tabla++) {
    for (contador = 1; limiteT >= contador; contador++) {
      resultado = tabla * contador;

      msg += `<br> ${tabla} x ${contador} = ${resultado}`;

      msg += validar(resultado);

    }
    msg += "<br>";
  }
  return msg + "total de pares: " + par + "<br>" + "total de impares " + impar;
}

function validar(resultado){
  
  if (resultado % 2 == 0){
    par ++
    return " Buzz";
  }else{
    impar++
    return " Bass";
  }
}

function TablaFor(){
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