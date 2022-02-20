let array1 = [
    prompt("Ingrese su nombre"),
    prompt("Ingrese su apellido"),
    parseInt(prompt("Ingrese la cantidad de bandanas a comprar")),
]
const precio = 40

if (array1[2]>5) {
    do{    
        var criterio = prompt("lo sentimos, actualmentesolo contamos con 5 bandanas en stock, por favor si desea continuar con la compra de 5 bandanas coloque SÍ, si desea cancelar la compra coloque NO");
        if (criterio === "NO" || criterio === "no"){
            array1[2] = 0;
            break;
        }if (criterio === "SÍ" || criterio === "sí"){
            array1[2] = 5;
            break;
        }
    }
    while (criterio != "Sí" ||criterio != "sí" || criterio != "NO"|| criterio != "no")
}

const precioFinal = (array1[2]*precio*1.18).toFixed(2)

if (precioFinal>0) {
    array1.push(precioFinal)
    console.log(`${array1[0]} ${array1[1]} el costo de sus ${array1[2]} bandanas es de S/ ${array1[3]}`)
    alert(`${array1[0]} ${array1[1]} el costo de sus ${array1[2]} bandanas es de S/ ${array1[3]}`)
}else {
    alert(`Lamentamos que haya decidido cancelar su compra, vuelva pronto`)
}
