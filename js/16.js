//Declaracion de la funcion

 function sumar () {   //Creas funcion
    console.log (10 + 10);
 }

 sumar();    //Llamas funcion

 //Expresion de la funcion

 const sumar2 = function (){
    console.log (3 + 3);
 }
 
 sumar2();

 //IIFE funcion que no necesita llamarse por que se llama sola

 (function (){
    console.log('Esto es una funcion iife');
 })();

 //------------------------------------------------------------------

 //Diferencia entre las dos 
 sumar();          //Se puede primero llamar la funcion se conoce como hoisting
 function sumar () {  
    console.log (10 + 10);
 }

 //Expresion de la funcion
 //sumar2();  //No se puede llamar primero la fuction por que JS lo lee como una variable y no una funcion
 //const sumar2 = function (){
    //console.log (3 + 3);
 //}
 
 
