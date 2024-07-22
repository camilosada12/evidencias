/**
 * Operaciones Aritméticas
 * Autor: Camilo andres losada
 * 01/04/2024
*/

// con parametros 

function suma(pnumUno,pnumDos){

    let numUno;
    let numDos;
    let sumar;
    numUno = pnumUno;
    numDos =pnumDos

    sumar = numUno + numDos;

    return sumar;
}

function resta(pnumUno,pnumDos){
    let numUno;
    let numDos;
    let restar;
    numUno = pnumUno;
    numDos =pnumDos

    restar = numUno - numDos;

    return restar;
}

function multiplicacion(pnumUno,pnumDos){
    let numUno;
    let numDos;
    let multiplicar;
    numUno = pnumUno;
    numDos =pnumDos

    multiplicar = numUno * numDos;

    return multiplicar;
}

function division(pnumUno,pnumDos){
    let numUno;
    let numDos;
    let dividir;
    numUno = pnumUno;
    numDos =pnumDos

    dividir = numUno / numDos;

    return dividir;
}

function operaciones(poerador,pnumUno,pnumDos){
    let numUno;
    let numDos;
    let operador = poerador;
    numUno = pnumUno;
    numDos = pnumDos;


    if(operador == "suma" ){

        return suma(numUno,numDos);

    }else if(operador == "resta" ){

        return resta(numUno,numDos);
        
    }else if(operador == "multiplicacion" ){

        return multiplicacion(numUno,numDos);
    
        
    }else if(operador == "division"){

        return division(numUno,numDos);
        
        
    }else{

        return "operacion no valida";
    }

}
 
//Expresion 

const sumaExp = function(pnumUno,pnumDos){
    let numUno;
    let numDos;
    let sumar;
    numUno = pnumUno;
    numDos =pnumDos

    sumar = numUno + numDos;

    return sumar;
}

const restaExp = function(pnumUno,pnumDos){

    let numUno;
    let numDos;
    let restar;
    numUno = pnumUno;
    numDos =pnumDos

    restar = numUno - numDos;

    return restar;
}

const multiplicacionExp = function(pnumUno,pnumDos){
    let numUno;
    let numDos;
    let multiplicar;
    numUno = pnumUno;
    numDos =pnumDos

    multiplicar = numUno * numDos;

    return multiplicar;
}

const divisionExp = function(pnumUno,pnumDos){
    let numUno;
    let numDos;
    let dividir;
    numUno = pnumUno;
    numDos =pnumDos

    dividir = numUno / numDos;

    return dividir;
}


const operacionesExp = function(poerador,pnumUno,pnumDos){
    let numUno;
    let numDos;
    let operador = poerador;
    numUno = pnumUno;
    numDos = pnumDos;

    if(operador == "sumaExp"){

        
        return sumaExp(numUno,numDos);
        
    }else if(operador == "restaExp"){

        
        return restaExp(numUno,numDos);
        
    }else if( operador == "multiplicacionExp" ){

        
        return multiplicacionExp(numUno,numDos);
        
    }else if(operador == "divisionExp"){

        
        return divisionExp(numUno,numDos);
        
    }else{

        return "operacion no valida";
    }

}

