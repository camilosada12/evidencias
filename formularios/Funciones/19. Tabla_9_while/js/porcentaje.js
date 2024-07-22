/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/


let resultado;

function tabla(ptablas,plimite){
    let tablas;
    let limite
    tablas = ptablas;
    limite = plimite
    let contador;
    let msg="";
    contador = 0;
    msg = "";

    while (contador<limite) {
        contador = contador +1
        resultado = tablas * contador;

        msg += `${tablas} x ${contador} = ${resultado} <br> `;
        msg += validar(resultado)

    }

    return msg;
}

function validar(resultado){
        if(resultado %2==0){

           return `par <br>`;
        }else{
           return `impar <br>`
        }
}

function tablaExp(){
    let tablaMul = parseInt(document.getElementById('tabla').value);
    let LimiteMul = parseInt(document.getElementById('Limite').value);
    let tablaMultiplicar
    
   

    if(tablaMul && LimiteMul ){
        tablaMultiplicar = tabla(tablaMul , LimiteMul)

        document.getElementById('resultados').innerHTML = `<strong> ${tablaMultiplicar}</strong>`;
    } 
    else{
        document.getElementById('resultados').innerHTML = `<strong>debes digitar algun numero</strong>`
    }
    return false;
}