//String o cadenas de texto

const tweet = 'Monitor de 20" a buen precio y con descuento';
const producto1 = 'Monitor HD"';

console.log (tweet.length);  //Con este .length nos dice cuantos caracteres tiene todo el texto
console.log (producto1);

//Indexof que sirve para que nos indique en que posicion se encuentra una palabra que se busque (retorna la posicion)

console.log (tweet.indexOf('con'));
console.log (producto1.indexOf('con')); //el resultado sera -1 por que no encontro la palabra

//Includes (retorna true o  false) una opcion mas nueva

console.log (tweet.includes('con'));  //true
console.log (producto1.includes('con'));  //false