function realizarTodasOperaciones(){

    let pantalla= document.getElementById("resultado")

    fetch('libreria/calcularNomina.php',{
        method: 'POST',
        headers:{
            'content-Type':'application/json'
        },
        body: JSON.stringify({
            diasTrabajados: 32,
            valorDias: 60000
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.error){
            alert(data.error);
        }else{
            pantalla.innerHTML=`
            <table class="border">
                <tr class="head">
                    <td class="text border">
                        <strong>nombre</strong>
                    </td>
                    <td class="text border">
                        <strong>apellido</strong>
                    </td>    
                    <td class="text border">
                        <strong>sueldo</strong>
                    </td>    
                    <td class="text border">
                        <strong>salud</strong>
                    </td>
                    <td class="text border">
                        <strong>arl</strong>
                    </td>    
                    <td class="text border">
                        <strong>pension</strong>
                    </td>    
                    <td class="text border">
                        <strong>deducibles</strong>
                    </td>    
                    <td class="text border">
                        <strong>subsidio de transporte</strong>
                    </td>    
                    <td class="text border">
                        <strong>total a pagar</strong>
                    </td>    
                </tr>
                <tr class="body">
                    <td class="text border">
                        <span>${data.nombre}</span>
                    </td>
                    <td class="text border">
                        <span>${data.apellido}</span>
                    </td>    
                    <td class="text border">
                        <span>
                            ${new Intl.NumberFormat('de-DE').format(data.sueldo,)}
                        </span>
                    </td>    
                    <td class="text border">
                        <span>${new Intl.NumberFormat('de-DE').format(data.salud,)}</span>
                    </td>
                    <td class="text border">
                        <span>${new Intl.NumberFormat('de-DE').format(data.arl,)}</span>
                    </td>    
                    <td class="text border">
                        <span>${new Intl.NumberFormat('de-DE').format(data.pension,)}</span>
                    </td>    
                    <td class="text border">
                        <span>${new Intl.NumberFormat('de-DE').format(data.deducibles,)}</span>
                    </td>    
                    <td class="text border">
                        <span>${new Intl.NumberFormat('de-DE').format(data.subTransporte,)}</span>
                    </td>    
                    <td class="text border">
                        <span>${new Intl.NumberFormat('de-DE', {style: "currency",currency: "COP"}).format(data.totalPagar,)}</span>
                    </td>    
                </tr>
            </table>
            `;
            
        }
    })
    .catch(error => console.error('Error:',error));
}
realizarTodasOperaciones()
