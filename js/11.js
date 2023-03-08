const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 2000,
    disponible : true
}

//Anterior forma de crear una variable a partir de la propiedades de un objeto
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;


//console.log(nombreProducto);
//console.log(precioProducto);

const {precio, nombreProducto} = producto;

console.log (precio);
console.log (nombreProducto);