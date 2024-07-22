document.addEventListener('DOMContentLoaded', function() {
    let Bingo = [];
    let printResultado = '';

 
    const nombresBingo = [
        'Bingo',
        'Bingo con Columna B',
        'Bingo con Columna I',
        'Bingo con Columna N',
        'Bingo con Columna G',
        'Bingo con Columna O',
        'Bingo con X',
        'Bingo con las 3 X'
    ];

    // Generar números de la tabla del 3
    const generarNumerosTablaDel3 = (max) => {
        let numeros = [];
        for (let iteracionNumero3 = 1; iteracionNumero3 * 3 <= max; iteracionNumero3++) {
            numeros.push(iteracionNumero3 * 3);
        }
        return numeros;
    };

    // Generar tablas de bingo
    for (let iteracionTablas = 0; iteracionTablas < 8; iteracionTablas++) {  
        let numerosTabla = generarNumerosTablaDel3(75);
        Bingo.push([
            numerosTabla.slice(0, 5),   // Fila 1
            numerosTabla.slice(5, 10),  // Fila 2
            numerosTabla.slice(10, 15), // Fila 3
            numerosTabla.slice(15, 20), // Fila 4
            numerosTabla.slice(20, 25)  // Fila 5 
        ]);
    }

    // Números específicos para marcar las 3 X
    const numerosMarcadosX1 = [6, 12, 24, 36, 42];
    const numerosMarcadosX2 = [33, 39, 51, 63, 69];
    const numerosMarcadosX3 = [39, 45, 57, 69, 75];

    // Generar acordeón
    for (let iteracionTablas = 0; iteracionTablas < Bingo.length; iteracionTablas++) {
        let numeroTabla = iteracionTablas + 1;
        let colorClass = `color-bingo-${numeroTabla}`; // estilo de las tablas 
        let nombreBingo = nombresBingo[iteracionTablas]; // Obtener nombre del Bingo
        
        printResultado += '<div class="accordion-item">';
        printResultado += `<h2 class="accordion-header" id="heading${numeroTabla}">`;
        printResultado += `<button class="accordion-button collapsed colorAcordion" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${numeroTabla}" aria-expanded="false" aria-controls="flush-collapse${numeroTabla}">`;
        printResultado += `${nombreBingo}`;
        printResultado += '</button>';
        printResultado += '</h2>';
        printResultado += `<div id="flush-collapse${numeroTabla}" class="accordion-collapse collapse" aria-labelledby="heading${numeroTabla}" data-bs-parent="#accordionFlushExample">`;
        printResultado += '<div class="accordion-body">';
        
        printResultado += `<div class="col-10 centro ${colorClass}">`; // Aplicar clase de color a la tabla
        printResultado += '<table class="table table-dark">';
        printResultado += '<thead>';
        printResultado += '<tr><th>B</th><th>I</th><th>N</th><th>G</th><th>O</th></tr>';
        printResultado += '</thead>';
        printResultado += '<tbody>';

        for (let fila = 0; fila < 5; fila++) {
            printResultado += '<tr>';
            for (let col = 0; col < 5; col++) {
                // Verificar si el número debe ser marcado
                let numero = Bingo[iteracionTablas][fila][col];
                let Clases = '';
                
                if (iteracionTablas === 1 && col === 0) {  // Bingo 2, columna B
                    Clases = 'color-0';
                } else if (iteracionTablas === 2 && col === 1) {  // Bingo 3, columna I
                    Clases = 'color-1';
                } else if (iteracionTablas === 3 && col === 2) {  // Bingo 4, columna N
                    Clases = 'color-2';
                } else if (iteracionTablas === 4 && col === 3) {  // Bingo 5, columna G
                    Clases = 'color-3';
                } else if (iteracionTablas === 5 && col === 4) {  // Bingo 6, columna O
                    Clases = 'color-4';
                } else if (iteracionTablas === 6) {  // Bingo 7, "X" grande
                    if ((fila === col) || (fila + col === 4)) {
                        Clases = 'marked-x-large';
                    }
                } else if (iteracionTablas === 7) {  // Bingo 8  generar3 X
                    if (numerosMarcadosX1.includes(numero)) {
                        Clases = 'marked-x1';
                    } else if (numerosMarcadosX2.includes(numero)) {
                        Clases = 'marked-x2';
                    } else if (numerosMarcadosX3.includes(numero)) {
                        Clases = 'marked-x3';
                    }
                }

                printResultado += `<td class="${Clases}">${numero}</td>`;
            }
            printResultado += '</tr>';
        }

        printResultado += '</tbody>';
        printResultado += '</table>';
        printResultado += '</div>';

        printResultado += '</div>';
        printResultado += '</div>';
        printResultado += '</div>';
    }

    document.getElementById('mostrar').innerHTML = printResultado;
});
