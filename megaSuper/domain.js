export class Producto{

    //sirve para obligar que cuando instanciemos la clase debamos dar valor
    // a estos parametros, no hace flata declararlos arriba
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

export class DescuentoFijo{
    constructor(monto) {
        this.monto = monto;
    }

    valorDescontado(_itemCarrito){
        return this.monto;
    }
}

export class DescuentoPorcentual{
    constructor(porcentaje) {
        this.porcentaje = porcentaje;
    }

    valorDescontado(itemCarrito){
        return (this.porcentaje/100) * itemCarrito.cantidad * itemCarrito.precioBase();
    }
}

export class DescuentoTresPorDos{
    valorDescontado(itemCarrito){
        return this.cantidadDeTrios(itemCarrito.cantidad) * itemCarrito.precioBase();
    }

    cantidadDeTrios(cantidad){
        return Math.floor(cantidad / 3);
    }
}

export class CarritoDeCompras{

    constructor() {
        this.carrito = [];
    }

    agregarItem(itemCarrito){

        this.carrito.push(itemCarrito);
        console.log("se han ingresado conrrectamente los items al carrito");
    }

    listarProductos (){
        this.carrito.forEach( (itemCarrito) => {
            console.log(itemCarrito.productName())
            console.log("Cantidad: " + itemCarrito.cantidad)
            console.log("Precio por unidad " + itemCarrito.precioBase())
            console.log("Precio sin descuento: " + itemCarrito.precioTotalSinDescuento() )
            console.log("Precio con descuentos: " + itemCarrito.precioFinal())
        } )
    }

    //Obtener la suma total de los precios.
    precioTotal(){
        const total = this.carrito.reduce((acumulador,producto) => {return acumulador + producto.precioFinal()} , 0)
        console.log("Precio total del carrito: " + total)
     }
}

export class ItemCarrito{

    constructor(producto,cantidad) {
        this.producto = producto
        this.cantidad = cantidad
        this.descuentos = []
    }

    precioBase(){
        return this.producto.precio
    }

    precioTotalSinDescuento(){
        return this.precioBase() * this.cantidad
    }

    productName(){
        return this.producto.nombre
    }

    precioFinal(){
        return Math.max(0,this.precioTotalSinDescuento() - this.descuentosTotales())
    }

    agregarDescuento(descuento){
        this.descuentos.push(descuento)
    }

    descuentosTotales(){
        return this.descuentos.reduce((acumulador,descuento) =>
            acumulador + descuento.valorDescontado(this), 0)
    }

}

export class Tienda {
    constructor() {
        this.productosDisponibles = []
    }

    listarProductosDisponibles(){
        this.productosDisponibles.forEach(producto => {
            console.log(producto.nombre)
            console.log("Precio por unidad " + producto.precio)
        })
    }

    agregarProductoTienda(producto){

        this.productosDisponibles.push(producto);
        console.log("se han ingresado conrrectamente los productos a la tienda");
    }

    filtrarPorCategoria(categoria){
        let productosFiltrados = this.productosDisponibles.filter(producto =>
            producto.categoria === categoria)
        productosFiltrados.forEach(producto => console.log(producto.nombre))
    }
}