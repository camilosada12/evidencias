/**
 * ejercicio de nomina
 * 15 de mayo 2024
 * Autor : Camilo andres losada
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

  function reten(pago, estrato){
    let estratoPers = estrato
    let salarioM = 1300000;
    let retencion;
    if (pago > 8 * salarioM && estratoPers == 6 ) {
      retencion = 0.05
    }else if(pago > salarioM * 6){
      retencion = 0.04
    }else if(pago > salarioM * 4){
      retencion = 0.03
    }else{
      retencion = 0
    }
    return retencion
  }


function bonos(pago , EstratoP){
    let bonificacion;
    let EstratoPersonas = EstratoP
    let sueldo = pago
    if(sueldo <= 1300000  && (EstratoPersonas === 1 || EstratoPersonas === 2) ){
        bonificacion = 100000
    }else{
        bonificacion = 0
    }
    return bonificacion;
}
let totalRetencion;
let EstratoP
let Estrato;
let subTrasP; 
let retencionP;
let arlP;
let pensionP;
let saludP;
let dias;
let valor;
let nomina = [];
let iteracion;
let totalPagar = [];
let totalPagarSueldo;

nomina= [
    {Cedula : 1077724121, Nombre : 'Camilo andres ' , Apellido: 'losada Ramirez', edad : 21 , Estrato : 2 , valorDia : 10000 , DiasTrabajados : 30},
    {Cedula : 1075225114, Nombre : 'yerson stiven ' , Apellido: 'cuellar rubiano', edad : 15 , Estrato : 2 , valorDia : 30000 , DiasTrabajados : 30},
    {Cedula : 1080291867, Nombre : 'Ingrid ' , Apellido: 'Medina Esquivel', edad : 18 , Estrato : 1 , valorDia : 250000 , DiasTrabajados : 30},
    {Cedula : 1075793094, Nombre : 'Karol Natalia ' , Apellido: 'Osorio Poveda', edad : 35 , Estrato : 2 , valorDia : 400000 , DiasTrabajados : 30},
    {Cedula : 1077723426, Nombre : 'Brayan Santiago ' , Apellido: 'Guerrero Mendez', edad : 19 , Estrato : 2 , valorDia : 60000 , DiasTrabajados : 30},
    {Cedula : 1138274089, Nombre : 'Daniel  ' , Apellido: 'Caicedo Trujillo', edad : 25 , Estrato : 4 , valorDia : 700000 , DiasTrabajados : 30},
    {Cedula : 1084331856, Nombre : 'Jesus David ' , Apellido: 'Fierro', edad : 18 , Estrato : 6 , valorDia : 1000000 , DiasTrabajados : 30},
    {Cedula : 1075540543, Nombre : 'Marcos ' , Apellido: 'Rojas Alvarez', edad : 17 , Estrato : 7 , valorDia : 120000 , DiasTrabajados : 30},
    {Cedula : 1005256532, Nombre : 'Andres Felipe ' , Apellido: 'tresPalacios Perez', edad : 3 , Estrato : 3 , valorDia : 10000 , DiasTrabajados : 30},
    {Cedula : 1075231111, Nombre : 'Daniel Felipe ' , Apellido: 'Bata', edad : 17 , Estrato : 1 , valorDia : 12000 , DiasTrabajados : 30}
]

for(iteracion = 0; iteracion<nomina.length; iteracion++){
    valor = nomina[iteracion].valorDia;
    dias = nomina[iteracion] .DiasTrabajados;
    Estrato = nomina[iteracion].Estrato
    totalSueldo = sueldo(valor,dias);
    saludP = salud(totalSueldo);
    pensionP = pension(totalSueldo);
    arlP = arl(totalSueldo);
    subTrasP = subTras(totalSueldo)
    EstratoP = bonos(totalSueldo , Estrato)
    retencionP = reten(totalSueldo , Estrato)
    totalRetencion = totalSueldo * retencionP
    saldoTotal = (totalSueldo + subTrasP + EstratoP) - (retencionP + saludP + pensionP + arlP)
    totalPagar.push({Nombre : nomina[iteracion].Nombre , Apellido : nomina[iteracion].Apellido , Edad : nomina[iteracion].edad , Estrato : nomina[iteracion].Estrato , valorDia : nomina[iteracion].valorDia , DiasTrabajados : nomina[iteracion].DiasTrabajados , sueldo : totalSueldo ,  salud : saludP , pension : pensionP , arl : arlP , subTrasporte : subTrasP , bonificacion : EstratoP , retencion : retencionP , DineroRetenido : totalRetencion , sueldoTotal : saldoTotal})
}

console.table(totalPagar);
