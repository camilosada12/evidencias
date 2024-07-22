/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/


function calcularEdad() {
  let fechaNacimientoPerUno = new Date(document.getElementById('txtedad').value);
  let fechaNacimientoPerDos = new Date(document.getElementById('txtedadDos').value);
  let fechaNacimientoPerTres = new Date(document.getElementById('txtedadTres').value);
  let respuesta = ""; 


  let PersonaUno = nacimiento(fechaNacimientoPerUno);
  let PersonaDos = nacimiento(fechaNacimientoPerDos);
  let PersonaTres = nacimiento(fechaNacimientoPerTres);
  let promedio;

  if(PersonaUno && PersonaDos && PersonaTres && promedio){
    promedio = (PersonaUno + PersonaDos + PersonaTres) / 3

    respuesta += validar(PersonaUno)
    respuesta += validar(PersonaDos)
    respuesta += validar(PersonaTres)
  
    document.getElementById("resultados").innerHTML = `
    la edad de la persona Uno es de ${PersonaUno} <br>
    la edad de la  persona Dos es de ${PersonaDos} <br>
    la edad de la  persona Tres es de ${PersonaTres} <br>
    el promedio de las edades es de : ${promedio} <br> 
    ${respuesta}`
  }else{
    document.getElementById(`resultados`).innerHTML = `<strong>por favor rellena todos los campos</strong>`
  }


  return false;
}


function nacimiento(fechaNac){
  let fechaAc = new Date();
  let Respuesta;
  let edad;

  Respuesta = fechaAc - fechaNac
  edad =  Math.floor(Respuesta / (1000 * 60 * 60 * 24 * 365.25));

  return edad
}

function validar(edad) {
  if (edad >= 18) {
    return `la persona tiene : ${edad} , eres  Mayor de edad <br>`;
  } else {
    return `la persona tiene : ${edad} , eres  Menor de edad <br>`;
  }
}


