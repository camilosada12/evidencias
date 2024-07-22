/**
 * Tabla de Multiplicar
 * Autor : Camilo Andres losada Ramirez
 * Fecha : 10/07/2024
 */

document.addEventListener('DOMContentLoaded' , function(){

    let Tabla = [];
    let Multiplo = [];
    let iteracionTabla;
    let iteracionMultiplo;
    let resultado;
    let NumeroTabla;
    let NumeroMultiplo;
    let printResultado = '';

    for(iteracionTabla = 0; iteracionTabla < 6; iteracionTabla++){
        NumeroTabla = iteracionTabla+1;
        for(iteracionMultiplo = 0; iteracionMultiplo < 10; iteracionMultiplo++){
            NumeroMultiplo = iteracionMultiplo+1;
            resultado = NumeroTabla * NumeroMultiplo;
            Multiplo.push(resultado)
        }
       Tabla.push(Multiplo)
    }

    for(iteracionTabla = 0; iteracionTabla < Tabla.length; iteracionTabla++){
        NumeroTabla = iteracionTabla+1;
        printResultado += ' <div class="accordion-item">';
        printResultado += '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse'+NumeroTabla+'" aria-expanded="false" aria-controls="flush-collapseOne">'; 
        printResultado += 'Tablas de Multiplicar #'+NumeroTabla; 
        printResultado += '</button>';
        printResultado += ' <div id="flush-collapse'+NumeroTabla+'" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">';

        for(iteracionMultiplo = 0; iteracionMultiplo < 10; iteracionMultiplo++){
            NumeroTabla = iteracionTabla+1;

            printResultado += ' <div class="accordion-body" style ="padding : 0 !important;">';
            printResultado += '<table class="table">';
            printResultado += '<tr style="padding: 0; margin: 0;"><td style="padding: 0; margin: 0;">'+NumeroTabla+ 'X' +NumeroMultiplo+ '=' +Tabla[iteracionTabla][iteracionMultiplo]+'</td></tr>';
            printResultado += '</table>';

            printResultado += '</div>';
        }
        printResultado += '</div>';
        printResultado += '</div>';
    }
    
    document.getElementById('accordionFlushExample').innerHTML = printResultado;

})