//Arrays

const numeros = [10, 20, 30, 40, 50];


//const arreglo = ["Hola", 10, true, "si", true, {nombre: "Paola", trabajo: "programando"}, [1,2,3]]; //no se limita a un solo tipo

//console.log (arreglo);

//Acceder a los valores de un arreglo

//console.log (numeros[4]); //Para acceder al indice que se requiera

//Conocer la extencion de un arreglo

//console.log (meses.length);

//numeros.forEach (function(num) {  //por cada uno, es un iterador, se ejecuta cada vez que haya un elemento en un arreglo
    //console.log (num)
//})
//--------------------------------
//numeros [5] = 60; //No es comun esta forma porque tendria que saber la extencion del arreglo y agregarlo; este lo agrega al fina

numeros.push (60,70,80); //Lo agrega al final, sin saber la extencion
numeros.unshift (-10,-20,-30); //Lo agrega al inicio, sin saber la extencion
console.table (numeros);

const meses = new Array ('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'); //Es otra forma de hacerlo con un constructor, pero es una forma antigua

// meses.pop();  //Elimina el ultimo valor del arreglo
// meses.shift(); //Elimina el primero valor del arreglo

// meses.splice (2, 1);
// console.table (meses);

const nuevoArreglo = [...meses, 'Junio'];  //lo agrega al final sin modificar los anteriores 
// const nuevoArreglo = ['Junio', ...meses];  //lo agrega al inicio sin modificar los anteriores
console.table (nuevoArreglo);