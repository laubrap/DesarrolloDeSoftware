export class Producto{

    //sirve para obligar que cuando instanciemos la clase debamos dar valor
    // a estos parametros, no hace flata declararlos arriba
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.precioBase = this.cantidad * this.precio;
        this.descuentos = [];
    }

    precioFinal(){
        return Math.max(0,this.precioBase - this.descuentosTotales())
    }

    agregarDescuentos(descuento){
        this.descuentos.push(descuento)
    }

    descuentosTotales(){
        return this.descuentos.reduce((acumulador,descuento) =>
            acumulador + descuento.valorDescontado(this), 0)
    }
}

export class DescuentoFijo{
    constructor(monto) {
        this.monto = monto;
    }

    valorDescontado(_producto){
        return this.monto;
    }
}

export class DescuentoPorcentual{
    constructor(porcentaje) {
        this.porcentaje = porcentaje;
    }

    valorDescontado(producto){
        return (this.porcentaje/100) * producto.precio * producto.cantidad;
    }
}

export class DescuentoTresPorDos{
    valorDescontado(producto){
        return this.cantidadDeTrios(producto.cantidad) * producto.precio;
    }

    cantidadDeTrios(cantidad){
        return Math.floor(cantidad / 3);
    }
}

export class Carrito{

    constructor() {
        this.carrito = [];
    }

    agregarProductoCarrito(producto){

        this.carrito.push(producto);
        console.log("se han ingresado conrrectamente los productos al carrito");
    }

    listarProductos (){
        this.carrito.forEach( (producto) => {
            console.log(producto.nombre)
            console.log("Cantidad: " + producto.cantidad)
            console.log("Precio por unidad " + producto.precio)
            console.log("Precio sin descuento: " + producto.precioBase)
            console.log("Precio con descuentos: " + producto.precioFinal())
        } )
    }

    //Obtener la suma total de los precios.
    precioTotal(){
        const total = this.carrito.reduce((acumulador,producto) => {return acumulador + producto.precioFinal()} , 0)
        console.log("Precio total del carrito: " + total)
     }
}

export class Tienda {
    constructor() {
        this.productosDisponibles = []
    }

    listarProductosDisponibles(){
        this.productosDisponibles.forEach(producto => {
            console.log(producto.nombre)
            console.log("Cantidad disponible: " + producto.cantidad)
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
        productosFiltrados.forEach(productos => console.log(productos.nombre))
    }
}