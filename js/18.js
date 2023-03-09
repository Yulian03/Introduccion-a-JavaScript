
function sumar (numero1 = 0, numero2 = 0) {     //numero1, 2 son parametros  
    console.log (numero1 + numero2);
 }

 sumar(10, 10);  //Son argumentos o valores reales 
 sumar(3, 3); 
 sumar(3, 6); 
 sumar(1); 

 const sumar2 = function (n1 = 0, n2 = 0){
    console.log (n1 + n2);
 }
 
 sumar2(3, 5);
 sumar2(5);