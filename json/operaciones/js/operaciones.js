function realizarTodasOperaciones(){

    fetch('libreria/calcular.php',{
        method: 'POST',
        headers:{
            'content-Type':'application/json'
        },
        body: JSON.stringify({
            numero1: 24,
            numero2: 12
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.error){
            alert(data.error);
        }else{
            document.getElementById('resultadoSuma').textContent=`suma: ${data.suma}`;
            document.getElementById('resultadoResta').textContent=`resta: ${data.resta}`;
            document.getElementById('resultadoMultiplicacion').textContent=`multiplicacion: ${data.multiplicacion}`;
        }
    })
    .catch(error => console.error('Error:',error));
}
realizarTodasOperaciones()
