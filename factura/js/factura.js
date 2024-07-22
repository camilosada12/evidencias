/**
 * ejercicio de arreglo llave:valor-factura
 * 15 de mayo 2024
 * Autor : Camilo andres losada
 */

let factura =[];
let valorTotalProducto;
let iteracion;
let totalPagar = [];
let totalPagoProducto;

factura =[
    {condigo : 1, nombreProducto : 'malteada' , cantidad: 2, valorUnidad :12000},
    {condigo : 2, nombreProducto : 'picada' , cantidad: 3, valorUnidad :12000},
    {condigo : 3, nombreProducto : 'hambuguesa mixta' , cantidad: 4, valorUnidad :1600},
    {condigo : 4, nombreProducto : 'churrasco' , cantidad: 1, valorUnidad :25000},
    {condigo : 5, nombreProducto : 'gaseosa' , cantidad: 5, valorUnidad :5000},
    {condigo : 6, nombreProducto : 'limonada' , cantidad: 5, valorUnidad :6000}
];

/**
valorTotalProducto = factura[3].cantidad * factura[3] .valorUnidad;
console.log(factura[4].nombreProducto)
console.log("Total Pagar :" +valorTotalProducto)
 */

for(iteracion = 0; iteracion<factura.length; iteracion++){
    totalPagoProducto = factura[iteracion].cantidad * factura[iteracion] .valorUnidad;
    totalPagar.push({nombreProducto : factura[iteracion].nombreProducto, cantidad : factura[iteracion].cantidad, valorUnidad:  factura[iteracion].valorUnidad,totalPagar:  totalPagoProducto})
}
console.table(totalPagar);