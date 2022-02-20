function cantidad(){
    do{
        Q1 = Number(prompt("Ingrese la cantidad de productos a comprar"));
    }while(isNaN(Q1) || Q1 < 1)
    return Q1;
}
function bandanas(){
    let qb = cantidad();
    const precio = 50;
    const IGV = 1.18;
    let bruto = qb * precio;
    let descuento = 0;
    let porcentaje = 0;
    if(qb > 5){
        descuento = bruto * 0.05;
        porcentaje = "5%";
        if(qb >= 10){
            descuento = bruto * 0.1;
            porcentaje = "10%";
        }
    }
    let final = (((bruto - descuento)  * IGV)).toFixed(2);
    if(descuento > 0){
        alert(`RESUMEN DE LA COMPRA:\n- Precio unitario: S/ ${precio}\n- Cantidad de productos: ${qb}\n- Descuento asignado: ${porcentaje}\n\nTotal sin descuento: S/ ${bruto}\nValor del descuento: S/ ${descuento}\nTotal sin IGV: S/ ${bruto - descuento}\n\nTOTAL A PAGAR (+IGV): S/ ${final}\n`);
    } else{
        alert(`RESUMEN DE LA COMPRA:\n- Precio unitario: S/ ${precio}\n- Cantidad de productos: ${qb}\n\nTotal sin IGV: S/ ${bruto - descuento}\n\nTOTAL A PAGAR (+IGV): S/ ${final}\n`);
    }
}
function correas(){
    let qc = cantidad();
    let precio = 90;
    const IGV = 1.18;
    let bruto = qc * precio;
    let descuento = 0;
    if(qc > 5){
        descuento = bruto * 0.05;
        porcentaje = "5%";
        if(qc >= 10){
            descuento = bruto * 0.1;
            porcentaje = "10%";
        }
    }
    let final = (((bruto - descuento)  * IGV)).toFixed(2);
    if(descuento > 0){
        alert(`RESUMEN DE LA COMPRA:\n- Precio unitario: S/ ${precio}\n- Cantidad de productos: ${qc}\n- Descuento asignado: ${porcentaje}\n\nTotal sin descuento: S/ ${bruto}\nValor del descuento: S/ ${descuento}\nTotal sin IGV: S/ ${bruto - descuento}\n\nTOTAL A PAGAR (+IGV): S/ ${final}\n`);
    } else{
        alert(`RESUMEN DE LA COMPRA:\n- Precio unitario: S/ ${precio}\n- Cantidad de productos: ${qc}\n\nTotal sin IGV: S/ ${bruto - descuento}\n\nTOTAL A PAGAR (+IGV): S/ ${final}\n`);
    }
}
function placas(){
    let qp = cantidad();
    let precio = 80;
    const IGV = 1.18;
    let bruto = qp * precio;
    let descuento = 0;
    if(qp > 5){
        descuento = bruto * 0.05;
        porcentaje = "5%";
        if(qp >= 10){
            descuento = bruto * 0.1;
            porcentaje = "10%";
        }
    }
    let final = (((bruto - descuento)  * IGV)).toFixed(2);
    if(descuento > 0){
        alert(`RESUMEN DE LA COMPRA:\n- Precio unitario: S/ ${precio}\n- Cantidad de productos: ${qp}\n- Descuento asignado: ${porcentaje}\n\nTotal sin descuento: S/ ${bruto}\nValor del descuento: S/ ${descuento}\nTotal sin IGV: S/ ${bruto - descuento}\n\nTOTAL A PAGAR (+IGV): S/ ${final}\n`);
    } else{
        alert(`RESUMEN DE LA COMPRA:\n- Precio unitario: S/ ${precio}\n- Cantidad de productos: ${qp}\n\nTotal sin IGV: S/ ${bruto - descuento}\n\nTOTAL A PAGAR (+IGV): S/ ${final}\n`);
    }
}
