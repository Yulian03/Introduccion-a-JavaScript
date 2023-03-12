//Clases    
class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto (){  //esto es un metodo
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor curvo de 50"', 800); 
const producto3 = new Producto('Lapto', 300); 

//HERENCIA

class Libro extends Producto {
    constructor (nombre, precio, isbn) {
        super(nombre, precio); 
        this.isbn = isbn;
    }
    formatearProducto (){  //esto es un metodo
        return `${super.formatearProducto() } y su ISBN es ${this.isbn}`;
    }
}

const libro = new Libro ('JavaScript la revolucion', 120, '1545485112131121'); 
console.log(libro.formatearProducto()); 
console.log(producto2.formatearProducto());
