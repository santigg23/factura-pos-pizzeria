//generar cuentas de cobro o factura pos.
let ordenCombos = [];
const combo1 = 50000;
const combo2 = 25000;
const combo3 = 30000;

const asignarCombo = () => {
    let nombreOrdenCombos = [];

    for (let i = 0; i < ordenCombos.length; i++) {
        switch (ordenCombos[i]) {
            case "1":
                nombreOrdenCombos.push("combo 1")
                break;
            case "2":
                nombreOrdenCombos.push("combo 2")
                break;
            case "3":
                nombreOrdenCombos.push("combo 3")
                break;
        }
        
    }
    return nombreOrdenCombos;
}

const pedidoSolicitado = () => {
    let estado = true;
    let costo = 0;
    do {
        let combo = prompt("¿Qué combo desea? \n1. Combo 1: Pizza grande + gaseosa 1.5lt = $50.000 \n2. Combo 2: Pizza personal = $25.000 \n3. Combo 3: Pizza personal + extra queso = $30.000")
        switch (combo) {
            case "1":
                ordenCombos.push(combo)
                costo += combo1;
                break;
            case "2":
                ordenCombos.push(combo)
                costo += combo2;
                break;
            case "3":
                ordenCombos.push(combo)
                costo += combo3;
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
    let costoPedido = pedidoSolicitado();
    let domicilio = prompt("¿Domicilio o recoger en tienda física? \n1. Domicilio \n2. Tienda física.");
    switch (domicilio) {
        case "1":
            if (costoPedido < 50000) {
                return costoPedido += 5000;
            } else {
                return costoPedido;
            }
        case "2":
            return costoPedido;
    }
    
}

const pedidoFinal = () => {
    let costoDomicilio = comprobarDomicilio();
    let mensaje = "";
    let comboSolicitado = asignarCombo();
    for (let i = 0; i < comboSolicitado.length; i++) {
        switch (comboSolicitado[i]) {
            case "combo 1":
                mensaje += `\nEl combo 1 vale $${combo1}`;
                break;
            case "combo 2":
                mensaje += `\nEl combo 2 vale $${combo2}`;
                break;
            case "combo 3":
                mensaje += `\nEl combo 3 vale $${combo3}`;
                break;
        }
        
    }
    let costoFinal = costoDomicilio;
    return `${mensaje} \n Y el costo final del pedido es de: ${costoFinal}`;
}


let mensajeFinal = pedidoFinal();
console.log(mensajeFinal);
