## Decisiones tomadas a la hora del desarrollo

### Productos
- Los productos tendran su categoria como atributo, pues despues podremos filtrar por
categorias
- Tiene sentido que el producto calcule su descuento? Y, es medio raro. Mas que nada
porque puede tener varios descuentos, lo que nos obligaria a que cada producto SEPA como
calcular cada impuesto, cosa que esta fea (repeticion de codigo)

- Los productos tienen ***descuentos***, tenemos opciones para implementarlo:
  - Con herencia: Existe un descuento padre, con un metodo abstracto calcular descuento
    y cada descuento hijo lo implementa a su manera. Imaginemos que esta nueva clase no 
    requiera un precio base. Estariamos LIGANDO a que un descuento (que no necesita de eso), 
    tenga ese atributo.

  - Con el patron de diseño Strategy, donde cada descuento representa una clase distinta
    y cada prodcuto tiene una lista de los mismos, puediendo tener mas de uno. Ademas, 
    otorga flexibilidad. Si el dia de mañana queremos agregar una mas, hacemos otra clase.
  
## Version 19 abril 2026
Ahora separe la logica, producto es solo un DataClass. La logica de negocio ahora esta encapsulada en carrito
e item carrito. No es necesario que el producto sepa su cantidad ahora (ya que en la gondola no tiene sentido esto,
mas que para un posible stock, que no estamos controlando. Podria implementarlo a futuro). Esto ahora es la responsabilidad
de item carrito, ya que la cantidad cobra sentido cuando lo agregamos al carrito


