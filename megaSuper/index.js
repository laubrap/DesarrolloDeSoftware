import {Producto, Carrito, DescuentoFijo, DescuentoTresPorDos, Tienda} from "./domain.js";

let cocacola = new Producto("cocacola",120,12,"bebida")
let leche = new Producto("leche",120,11,"bebida")
let carrito = new Carrito()
let descuento = new DescuentoFijo(200)
let descuentoTresPor = new DescuentoTresPorDos()
let tienda = new Tienda ()

cocacola.agregarDescuentos(descuento)
cocacola.agregarDescuentos(descuentoTresPor)
cocacola.agregarDescuentos(descuento)
cocacola.agregarDescuentos(descuento)

carrito.agregarProductoCarrito(cocacola)
carrito.agregarProductoCarrito(leche)
carrito.precioTotal()
carrito.listarProductos()

tienda.agregarProductoTienda(cocacola)
tienda.agregarProductoTienda(leche)
tienda.listarProductosDisponibles()

tienda.filtrarPorCategoria("bebida")