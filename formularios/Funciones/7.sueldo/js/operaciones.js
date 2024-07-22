/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/

function operaciones(){
    let DiasTrabajados = parseInt(document.getElementById('txtNumeroUno').value);
    let valorDia = parseInt(document.getElementById('txtNumeroDos').value);
    let sueldo;
    let pension; 
    let arl;
    let salud;
    let rsueldo;
    let rpension;
    let rarl;
    let rsalud;
    let total;
    let rtotal;

    sueldo = parseInt(DiasTrabajados * valorDia);
    arl = parseInt(sueldo * 0.052);
    salud = parseInt(sueldo * 0.12);
    pension = parseInt(sueldo * 0.16);
    total = sueldo  -  (arl + salud + pension) ;

    if(sueldo && arl && salud && pension && total){
        rsueldo = `<strong> sueldo de la persona : </strong> ${sueldo}  <br>`
        rpension = ` <strong> retencion del arl : </strong> ${arl} <br>`
        rarl = ` <strong> retencion de salud  : </strong> ${salud} <br>`
        rsalud = `<strong> retencion de  pension : </strong>  ${pension} <br>`
        rtotal = `<strong> sueldo total de la persona : </strong>  ${total}`
    
        document.getElementById('resultados').innerHTML = rsueldo + rpension + rarl + rsalud + rtotal;
    }else{
        document.getElementById('resultados').innerHTML = 'Rellena todas las carpetas'
    }
    return false;
}