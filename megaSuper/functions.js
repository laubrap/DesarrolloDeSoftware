export function aumentarPrecioBase (prouctos,valor){
    prouctos.forEach((producto) => {
        producto.precio += valor;
    })
}

export function precioFinalMasAlto(productos){
    const precios = productos.map(producto => producto.precioFinal())
    return Math.max(...precios) //desarma los precios, max recibe una lista a, b, c, ... separada por ","
}

