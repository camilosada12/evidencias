/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function porcentaje(){
    let nota1 =  parseInt(document.getElementById("txtNumeroUno").value)
    let nota2 =  parseInt(document.getElementById("txtNumeroDos").value)
    let nota3 =  parseInt(document.getElementById("txtNumeroTres").value)
    let promedio;
    let rpromedio
    promedio = (nota1 + nota2 + nota3) / 3
    if(promedio){
        rpromedio = `<strong>nota final : ${promedio}</strong>`
        document.getElementById('resultados').innerHTML = rpromedio;
    }
    else{
        document.getElementById('resultados').innerHTML = "completa todos los campos ";
    }
    return false 
}