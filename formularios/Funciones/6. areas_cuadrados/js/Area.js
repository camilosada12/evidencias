/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function porcentaje(){
    let Cuadrado =  parseFloat(document.getElementById("txtCuadradoLado").value)
    let rectaguloB =  parseFloat(document.getElementById("txtRectanguloBase").value)
    let rectanguloA =  parseFloat(document.getElementById("txtRectanguloAltura").value)
    let trianguloB =  parseFloat(document.getElementById("txtTrianguloBase").value)
    let trianguloA =  parseFloat(document.getElementById("txtTrianguloAltura").value)
    let AreaC
    let AreaR
    let AreaT
    let rAreaC
    let rAreaR
    let rAreaT

    AreaC = Cuadrado * Cuadrado
    AreaR = rectaguloB * rectanguloA
    AreaT = (trianguloB * trianguloA) / 2

    if(AreaC && AreaR && AreaT){
        rAreaC = `<strong>Area del Cuadrado : ${AreaC}</strong> <br>`
        rAreaR = `<strong>Area del Rectangulo : ${AreaR}</strong> <br>`
        rAreaT = `<strong>Area del Triangulo : ${AreaT}</strong> <br>`
        
        document.getElementById(`resultados`).innerHTML = rAreaC + rAreaR + rAreaT
    }else{
        document.getElementById(`resultados`).innerHTML = `<strong>por favor rellena todos los campos</strong>`
    }
    return false
}