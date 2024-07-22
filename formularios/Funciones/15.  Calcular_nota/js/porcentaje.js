/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function porcentaje(){
    let nota1 =  parseFloat(document.getElementById("txtNumeroUno").value)
    let nota2 =  parseFloat(document.getElementById("txtNumeroDos").value)
    let nota3 =  parseFloat(document.getElementById("txtNumeroTres").value)
    let notaFinal;
    let rnotaFinal;
    let promedioNota1;
    let promedioNota2;
    let promedioNota3;
    let rpromedio1
    let rpromedio2
    let rpromedio3
    let validarNotas

    promedioNota1 = nota1 * 0.2
    promedioNota2 = nota2 * 0.35
    promedioNota3 = nota3 * 0.45
    notaFinal = promedioNota1 + promedioNota2 + promedioNota3
    validarNotas = validar(notaFinal)

    
    if(promedioNota1 && promedioNota2 && promedioNota3){
        rpromedio1 = `<strong>primera Primera Nota : ${promedioNota1}</strong> <br>`
        rpromedio2 = `<strong>segunda Segunda Nota : ${promedioNota2}</strong> <br>`
        rpromedio3 = `<strong>tercera Tercera Nota : ${promedioNota3}</strong> <br>`
        rnotaFinal = `<strong>Nota final : ${notaFinal} <br> ${validarNotas}</strong> `
        
        document.getElementById('resultados').innerHTML = rpromedio1 + rpromedio2 + rpromedio3 + rnotaFinal;
    }
    else{
        document.getElementById('resultados').innerHTML = " <strong> rellena las casillas </strong>";
    }
    return false 
}

function validar(psuma) {
    let suma;
    suma = psuma;
    if (suma > 4.5) {
      return "La calificación es Superior " + suma;
    } else if (suma <= 4.5 && suma > 3.5) {
      return "La calificaciom es Buena " + suma;
    } else if (suma >= 3 && suma <= 3.5) {
      return "La calificacion es Media " + suma;
    } else {
      return "la calificacion es Mala" + suma;
    }
  }