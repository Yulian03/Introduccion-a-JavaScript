//forEach y map

const carrito = [                                               
    { nombre: 'Monitor 20 pulgadas', precio: 500},
    { nombre: 'Television 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

//forEach  - Puede ser utilizado en un arreglo y se puede hacer mas corto con un arron function

carrito.forEach(producto => console.log(producto.nombre));

//map

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(arreglo2);