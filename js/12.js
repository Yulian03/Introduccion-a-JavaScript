"use strict";  //se ejecuta el codigo de JS de manera extricta, 
//Object Methods
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 2000,
    disponible : true
}

Object.freeze (producto);  //Freeze no permite agregarle nuevas propiedades a la variable, tampoco  eliminar propiedades, tampoco modificar el valor de una propiedad
Object.seal (producto); //seal  no permite agregarle nuevas propiedades a la variable, tampoco  eliminar propiedades, pero si modificar el valor de una propiedad

//producto.imagen = "imagen.jpg";

console.log (Object.isFrozen (producto));  //para saber si un metodo esta sellado
console.log (Object.isSealed (producto));

console.log (producto);