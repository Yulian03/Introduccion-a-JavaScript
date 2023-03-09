//Array Methods
const meses =  ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];  //Arreglo unidimensional 


const carrito = [                                               //Arreglo de objetos
    { nombre: 'Monitor 20 pulgadas', precio: 500},
    { nombre: 'Television 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];
//-------------------------
//forEach
//meses.forEach(function(mes) {
  //  console.log(mes)
//}); 

//-------------------------
//forEach  con estructura de control

meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe')
    }
}); 
//-------------------------

//Includes, es el equivalente a forEach, pero funciona en arreglo unidimensional 

//const resultado = meses.includes('Marzo');
//console.log(resultado);

//-------------------------

//Some, ideal para arreglo de objetos

//resultado = carrito.some(function(producto) {
    //return producto.nombre === 'Celular'
//});

//console.log (resultado);

//-------------------------

//Reduce, para realizar la suma de los objetos

resultado = carrito.reduce(function(total, producto) { 
    return total + producto.precio
}, 0);



//Filter

resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre === 'Celular'       //trae todos los celulares
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'       //trae todos menos los que diga celular
});

console.log(resultado);