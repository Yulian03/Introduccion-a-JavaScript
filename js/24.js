//FOR LOOP

// for ( let i = 0; i < 10; i++) {
//     console.log(i);
// }

//----------------------------------------------

// for ( let i = 1; i < 100; i++) {
//     if ( i % 2 === 0) {   //%2 === 0 es el modulo (si el residuo es 0 es par)
//         console.log(`El numero ${i} es PAR`);
//     } else {
//         console.log(`El numero ${i} es IMPAR`);
//     }
// }

//----------------------------------------------

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

for (let i = 0; i < carrito.length; i++){
    console.log (carrito[i].nombre);
}

//----------------------------------------------

//While loop   (se ejecuta mientras la condicion sea verdadera)

// let i = 1;   //Indice

// while (i <= 100) {  //Condicion

//     if (i % 2 === 0) {
//         console.log(`El número ${i} es PAR`);
//     } else {
//         console.log(`El número ${i} es IMPAR`);
//     }

//     i++;    //Incremento
// }

//----------------------------------------------

// let i = 20;   

// while (i < 10) {  

//         console.log('Desde el while loop');
   
//     i++;    
// }

//----------------------------------------------

//Do While loop  (se ejecuta una vez y luego valida que la condicion sea verdadera)

let i = 100;

do {
    console.log(i);

    i++;
} while ( i < 10);

