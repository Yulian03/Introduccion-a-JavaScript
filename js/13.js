const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 2000,
    disponible : true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

const nuevoProducto = { ...producto, ...medidas };

console.log (producto);
console.log (nuevoProducto);