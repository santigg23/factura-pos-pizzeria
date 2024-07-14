//generar cuentas de cobro o factura pos.
const pedidoSolicitado = () => {
    let estado = true;
    let costo = 0;
    do {
        let combo = prompt("¿Qué combo desea? \n1. Combo 1: Pizza grande + gaseosa 1.5lt = $50.000 \n2. Combo 2: Pizza personal = $25.000 \n3. Combo 3: Pizza personal + extra queso = $30.000")
        switch (combo) {
            case "1":
                costo += 50000
                break;
            case "2":
                costo += 25000
                break;
            case "3":
                costo += 30000
                break;
        }
        estado = repetir();

    } while (estado);

    return costo;
}

const repetir = () => {
    let repetirOrden = prompt("¿Desea ordenar otro combo? \n1. Si \n2. No")
    if (repetirOrden === "1") {
        return true
    } else {
        return false
    }
}

const comprobarDomicilio = () => {
    let costo = pedidoSolicitado();
    let domicilio = prompt("¿Domicilio o recoger en tienda física? \n1. Domicilio \n2. Tienda física.");
    switch (domicilio) {
        case "1":
            if (costo < 50000) {
                return costo += 5000;
            } else {
                return costo;
            }
        case "2":
            return costo;
    }
    
}

const pedidoFinal = () => `El costo final del pedido es de: ${comprobarDomicilio()}`;

let mensaje = pedidoFinal();
console.log(mensaje);
