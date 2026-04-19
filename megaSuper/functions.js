export function aumentarPrecioBase (prouctos,valor){
    prouctos.forEach((producto) => {
        producto.precio += valor;
    })
}

export function precioFinalMasAlto(productos){
    const precios = productos.map(producto => producto.precioFinal())
    return Math.max(...precios) //desarma los precios, max recibe una lista a, b, c, ... separada por ","
}

//Obtener los productos con un precio final menor a determinado monto.
export function productosConPreciosMenores(productos,precio){
    return productos.filter((producto) => producto.precioFinal() <=  precio)
}

//Ordenar la lista por precio, de menor a mayor.
//en esta funcion si resta < 0 se queda con producto 1, sino con producto 2
export function ordenarListaPorPrecio(productos){
    return productos.sort((producto1,producto2) => producto1.precioFinal()-producto2.precioFinal())
}
