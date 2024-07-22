/*
funcion saludar
autor : camilo andres losada
fecha  : 17/06/24
*/
function sueldo(pdiaT, pvalorD) {
    let diaT; //Dias Trabajados
    let valorD; //Valor por día
    let pago;
  
    diaT = pdiaT;
    valorD = pvalorD;
    pago = diaT * valorD;
    return pago;
  }
  function salud(pago) {
    let saludP = pago * 0.12;
    return saludP;
  }
  
  function pension(pago) {
    let pensionP = pago * 0.16;
    return pensionP;
  }
  
  function arl(pago) {
    let arlP = pago * 0.052;
    return arlP;
  }
  function subTras(pago) {
    let salarioM = 1300000;
    let trans;
    if (pago <= salarioM * 2) {
      trans = 114000;
    } else {
      trans = 0;
    }
    return trans;
  }
  function reten(pago) {
    let salarioM = 1300000;
    let retencion;
    if (pago > salarioM * 4) {
      retencion = pago * 0.04;
    } else {
      retencion = 0;
    }
    return retencion;
  }
  function pagoT(pago) {
    let salario = pago;
    let saludE = salud(pago);
    let pensionE = pension(pago);
    let arlE = arl(pago);
  
    let retencion = reten(pago);
    let subTrasporte = subTras(pago);
    let descuento = saludE + pensionE + arlE;
  
    let totalSalario = salario + subTrasporte - (retencion + descuento);
  
    return totalSalario;
  }

function salario(){
    let DiasTrabajados = parseInt(document.getElementById('txtNumeroUno').value);
    let valorDia = parseInt(document.getElementById('txtNumeroDos').value);
    let salarioP
    let Parl
    let Psalud
    let Ppension
    let rsubtrasporte
    let Psubtrasporte     
    let retencion
    let pagoTotal
    let rRetencion
    let rsueldo
    let rpension 
    let rsalud
    let rarl
    let rtotal   

    salarioP = sueldo(DiasTrabajados,valorDia);
    Parl = arl(salarioP);
    Psalud = salud(salarioP);
    Ppension = pension(salarioP);
    Psubtrasporte = subTras(salarioP);
    retencion = reten(salarioP)
    pagoTotal = pagoT(salarioP)

  if(salarioP && Parl && Psalud && Ppension && Psubtrasporte  && retencion && pagoTotal ){
    rsueldo = `<strong> sueldo de la persona : </strong> ${salarioP}  <br>`
    rpension = ` <strong> retencion del arl : </strong> ${Parl} <br>`
    rarl = ` <strong> retencion de salud  : </strong> ${Psalud} <br>`
    rsalud = `<strong> retencion de  pension : </strong>  ${Ppension} <br>`
    rsubtrasporte = `<strong> subtrasporte :  </strong>  ${Psubtrasporte} <br>`
    rRetencion = `<strong> retencion del sueldo :  </strong>  ${retencion} <br>`
    rtotal = `<strong> sueldo total de la persona : </strong>  ${pagoTotal}`
    
        document.getElementById('resultados').innerHTML = rsueldo + rpension + rarl + rsalud + rsubtrasporte + rRetencion + rtotal;
  }  else{
    document.getElementById(`resultados`).innerHTML = `<strong>por favor rellena todos los campos</strong>`
 }
   return false;
}
   
