//POO  Programacion orientada a objetos


//**Object literal**// 
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//**Object Constructor **//
function Producto (nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

//Prototype, crear funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}
const producto2 = new Producto('Monitor curvo de 50"', 800, true); 
const producto3 = new Producto('Lapto', 300, false); 
const producto4 = new Producto('Mouse', 100, true); 

function formatearProducto (producto){
    return `El producto ${producto.nombre} tiene un precio de ${producto.precio}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4);

console.log(formatearProducto(producto2));


