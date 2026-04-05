import {Producto, Carrito, DescuentoFijo} from "./domain.js";

let nuevo = new Producto("cocacola",120,12)
let carrito = new Carrito()
let descuento = new DescuentoFijo(200)

nuevo.agregarDescuentos(descuento)
nuevo.agregarDescuentos(descuento)
nuevo.agregarDescuentos(descuento)
nuevo.agregarDescuentos(descuento)

carrito.agregarProducto(nuevo)
carrito.agregarProducto(nuevo)

carrito.listarProductos(nuevo)
