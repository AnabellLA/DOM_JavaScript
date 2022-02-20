let cantidad = 0;
let sumatoria = 0;

do{
    cantidad = Number(prompt("Ingrese una cantidad para la sumatoria"));
}while(isNaN(cantidad) || cantidad < 1)

for ( let i = 1; i <= cantidad; i++) {
    sumatoria += i;
}

document.write(`La sumatoria de ${cantidad} es ${sumatoria}`);
