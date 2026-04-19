import { Producto, ItemCarrito, CarritoDeCompras, Tienda, DescuentoFijo, DescuentoPorcentual, DescuentoTresPorDos } from './domain.js';

// ─────────────────────────────────────────────
// PRODUCTOS
// ─────────────────────────────────────────────
const manzana    = new Producto("Manzana",    100, "Frutas");
const banana     = new Producto("Banana",     50,  "Frutas");
const coca       = new Producto("Coca Cola",  200, "Bebidas");
const agua       = new Producto("Agua",       80,  "Bebidas");
const chocolate  = new Producto("Chocolate",  300, "Golosinas");

// ─────────────────────────────────────────────
// DESCUENTOS
// ─────────────────────────────────────────────
const descFijo         = new DescuentoFijo(50);          // $50 fijo
const descPorcentual   = new DescuentoPorcentual(10);    // 10%
const descTresPorDos   = new DescuentoTresPorDos();      // 3x2

// ─────────────────────────────────────────────
// TEST 1 — ItemCarrito sin descuentos
// ─────────────────────────────────────────────
console.log("════════════════════════════════════");
console.log("TEST 1: ItemCarrito sin descuentos");
console.log("════════════════════════════════════");

const item1 = new ItemCarrito(manzana, 3);
console.log("Producto:", item1.productName());                          // Manzana
console.log("Precio base (unitario):", item1.precioBase());             // 100
console.log("Precio total sin descuento:", item1.precioTotalSinDescuento()); // 300
console.log("Precio final:", item1.precioFinal());                      // 300

// ─────────────────────────────────────────────
// TEST 2 — DescuentoFijo
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════");
console.log("TEST 2: DescuentoFijo ($50)");
console.log("════════════════════════════════════");

const item2 = new ItemCarrito(coca, 2);       // 200 x 2 = 400
item2.agregarDescuento(descFijo);
console.log("Producto:", item2.productName());
console.log("Precio total sin descuento:", item2.precioTotalSinDescuento()); // 400
console.log("Descuentos totales:", item2.descuentosTotales());               // 50
console.log("Precio final:", item2.precioFinal());                           // 350

// ─────────────────────────────────────────────
// TEST 3 — DescuentoPorcentual
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════");
console.log("TEST 3: DescuentoPorcentual (10%)");
console.log("════════════════════════════════════");

const item3 = new ItemCarrito(chocolate, 4);  // 300 x 4 = 1200
item3.agregarDescuento(descPorcentual);
console.log("Producto:", item3.productName());
console.log("Precio total sin descuento:", item3.precioTotalSinDescuento()); // 1200
console.log("Descuentos totales:", item3.descuentosTotales());               // 120
console.log("Precio final:", item3.precioFinal());                           // 1080

// ─────────────────────────────────────────────
// TEST 4 — DescuentoTresPorDos
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════");
console.log("TEST 4: DescuentoTresPorDos");
console.log("════════════════════════════════════");

const item4 = new ItemCarrito(banana, 6);     // 50 x 6 = 300, 2 trios → descuento = 2 x 50 = 100
item4.agregarDescuento(descTresPorDos);
console.log("Producto:", item4.productName());
console.log("Precio total sin descuento:", item4.precioTotalSinDescuento()); // 300
console.log("Descuentos totales:", item4.descuentosTotales());               // 100
console.log("Precio final:", item4.precioFinal());                           // 200

// ─────────────────────────────────────────────
// TEST 5 — Descuentos combinados en un mismo item
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════");
console.log("TEST 5: Descuentos combinados (fijo + porcentual)");
console.log("════════════════════════════════════");

const item5 = new ItemCarrito(agua, 5);       // 80 x 5 = 400
item5.agregarDescuento(new DescuentoFijo(30));
item5.agregarDescuento(new DescuentoPorcentual(20));
console.log("Producto:", item5.productName());
console.log("Precio total sin descuento:", item5.precioTotalSinDescuento()); // 400
console.log("Descuentos totales:", item5.descuentosTotales());               // 30 + 80 = 110
console.log("Precio final:", item5.precioFinal());                           // 290

// ─────────────────────────────────────────────
// TEST 6 — Descuento mayor al precio (Math.max protección)
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════");
console.log("TEST 6: Descuento mayor al precio (no precio negativo)");
console.log("════════════════════════════════════");

const item6 = new ItemCarrito(manzana, 1);    // 100 x 1 = 100
item6.agregarDescuento(new DescuentoFijo(999));
console.log("Precio final (debe ser 0):", item6.precioFinal());             // 0

// ─────────────────────────────────────────────
// TEST 7 — Carrito con múltiples items
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════");
console.log("TEST 7: Carrito completo");
console.log("════════════════════════════════════");

const carrito = new CarritoDeCompras();
carrito.agregarItem(item1);  // Manzana x3 = 300
carrito.agregarItem(item2);  // Coca x2 = 350 (con descFijo)
carrito.agregarItem(item3);  // Chocolate x4 = 1080 (con 10%)

console.log("\n--- listarProductos ---");
carrito.listarProductos();

console.log("\n--- precioTotal ---");
carrito.precioTotal();        // 300 + 350 + 1080 = 1730

// ─────────────────────────────────────────────
// TEST 8 — Tienda
// ─────────────────────────────────────────────
console.log("\n════════════════════════════════════");
console.log("TEST 8: Tienda");
console.log("════════════════════════════════════");

const tienda = new Tienda();
tienda.agregarProductoTienda(manzana);
tienda.agregarProductoTienda(banana);
tienda.agregarProductoTienda(coca);
tienda.agregarProductoTienda(agua);
tienda.agregarProductoTienda(chocolate);

console.log("\n--- listarProductosDisponibles ---");
tienda.listarProductosDisponibles();

console.log("\n--- filtrarPorCategoria: Bebidas ---");
tienda.filtrarPorCategoria("Bebidas");   // coca, agua

console.log("\n--- filtrarPorCategoria: Frutas ---");
tienda.filtrarPorCategoria("Frutas");    // manzana, banana

console.log("\n--- filtrarPorCategoria: Inexistente ---");
tienda.filtrarPorCategoria("Lacteos");  // nada