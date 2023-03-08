//Objetos 

const nombreProducto = "Monitor 20 pulgadas";  
const precio = 2000;
const disponible = true;

// La forma de aplicarlo es crear una variable con esos tres objetos, se recomienda esta opcion

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 2000,
    disponible : true
}



//console.log (producto.nombreProducto);
//console.log (producto.precio);
//console.log (producto.disponible);


//console.log (producto ["precio"]);  //otra forma de traer las propiedades de un objeto

//AGREGAR NUEVAS PROPIEDADES

producto.imagen = "imagen.jpg";

//ELIMINAR PROPIEDADES

delete producto.disponible;

console.log (producto);