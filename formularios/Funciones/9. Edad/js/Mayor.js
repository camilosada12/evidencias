/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function calcularEdad() {
    let fechaNacimiento = new Date(document.getElementById('txtedad').value);
    let fechaActual = new Date(); 

    if(fechaNacimiento && fechaActual){
        let diferencia = fechaActual - fechaNacimiento;

        let edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    
        let resultado = `<strong>La edad de la persona es ${edad} años.</strong>`;
        
        document.getElementById('resultados').innerHTML = resultado;
    }else{
         document.getElementById(`resultados`).innerHTML = `<strong>por favor rellena todos los campos</strong>`
    }


    return false;
}