class Producto{

    //sirve para obligar que cuando instanciemos la clase debamos dar valor
    // a estos parametros, no hace flata declararlos arriba
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descuentos = [];
    }

    precioFinal(){
        
    }
}

class DescuentoFijo{
    constructor(descuento) {
        this.descuento = descuento;
    }

    valorDescontado(_producto){
        return this.descuento;
    }
}

class DescuentoPorcentual{
    constructor(porcentaje) {
        this.porcentaje = porcentaje;
    }

    valorDescontado(producto){
        return (this.porcentaje/100) * producto.precio;
    }
}

class DescuentoTresPorDos{
    valorDescontado(producto){
        return this.cantidadDeTrios(producto.cantidad) * producto.precio;
    }

    cantidadDeTrios(cantidad){
        return Math.floor(cantidad / 3);
    }
}