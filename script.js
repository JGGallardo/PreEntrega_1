const iva = 1.21;
const opcionesMenu = () => {
    let opcionUsuario;
    let precioCosto;
    let precioVenta;
    do {
        opcionUsuario = parseInt(
            prompt(`¿Qué herramienta desea utilizar? \n
    1 - Cálculo de porcentaje de ganancia \n
    2 - Obtener precio con IVA \n
    3 - Obtener precio sin IVA \n
    0 - Salir.`)
        );
        switch (opcionUsuario) {
            case 0:
                alert("¡Gracias por utilizar el programa!");
                break;
            case 1:
                precioVenta = parseFloat(prompt("Ingrese el precio de venta:"));
                precioCosto = parseFloat(prompt("Ingrese el precio de costo:"));

                if (isNaN(precioVenta) || isNaN(precioCosto) || precioCosto <= 0) {
                    alert("Por favor, ingrese valores numéricos válidos.");
                } else {
                    let ganancia = calcularGanancia(precioVenta, precioCosto);
                    alert(`El porcentaje de ganancia es: ${ganancia}%`);
                }
                break;
            case 2:
                precioCosto = parseFloat(prompt("Ingrese el precio de costo:"));
                if (isNaN(precioCosto) || precioCosto <= 0) {
                    alert("Por favor, ingrese valores numéricos válidos.");
                } else {
                    let precioConIva = costoConIva(precioCosto);
                    alert(`El precio de costo con iva incluido es ${precioConIva}`);
                }
                break;
            case 3:
                precioCosto = parseFloat(prompt("Ingrese el precio de costo:"));
                if (isNaN(precioCosto) || precioCosto <= 0) {
                    alert("Por favor, ingrese valores numéricos válidos.");
                } else {
                    let precioSinIva = costoSinIva(precioCosto);
                    alert(`El precio de costo sin iva incluido es ${precioSinIva}`);
                }
                break;
            default:
                alert(`Opción inválida, ingrese un número correcto.`);
                break;
        }
    } while (opcionUsuario !== 0);
};
opcionesMenu();

// Calcula el porcentaje de ganancia de un producto
function calcularGanancia(precioVenta, precioCosto) {
    let ganancia = ((precioVenta - precioCosto) / precioCosto) * 100;
    return ganancia.toFixed(2);
}
function costoConIva(precioCosto) {
    let precioConIva = precioCosto * iva;
    return precioConIva.toFixed(2);
}
function costoSinIva(precioCosto) {
    let precioSinIva = precioCosto / iva;
    return precioSinIva.toFixed(2);
}
