/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function saludo(){
    let saludo = document.getElementById('txtNumeroUno').value;
    let rsaludo

    if(saludo){
        rsaludo = `<strong> mensaje : </strong> ${saludo}  <br>`

        document.getElementById('resultados').innerHTML = saludo;
    }
    else{
        document.getElementById('resultados').innerHTML = `digita algun mensaje `;
    }
    return false;
}