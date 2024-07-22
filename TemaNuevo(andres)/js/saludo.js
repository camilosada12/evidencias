/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function saludar(){
    let saludo = document.getElementById('txtsaludo').value;
    document.getElementById('saludo').innerHTML =`${saludo}`
    return false
}