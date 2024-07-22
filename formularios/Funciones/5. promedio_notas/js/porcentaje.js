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
    promedioNota1 = nota1 * 0.3
    promedioNota2 = nota2 * 0.3
    promedioNota3 = nota3 * 0.4
    notaFinal = promedioNota1 + promedioNota2 + promedioNota3
    
    if(promedioNota1 && promedioNota2 && promedioNota3){
        rpromedio1 = `<strong>primera Nota : ${promedioNota1}</strong> <br>`
        rpromedio2 = `<strong>segunda Nota : ${promedioNota2}</strong> <br>`
        rpromedio3 = `<strong>tercera Nota : ${promedioNota3}</strong> <br>`
        rnotaFinal = `<strong>Nota final : ${notaFinal}</strong>`
        document.getElementById('resultados').innerHTML = rpromedio1 + rpromedio2 + rpromedio3 + rnotaFinal;
    }
    else{
        document.getElementById('resultados').innerHTML = " <strong> rellena las casillas </strong>";
    }
    return false 
}