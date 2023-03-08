// Controlar el orden de los operadores


let resultado;

resultado = 20 + 30 *2;  //el orden va a ser primero el signo con mas peso *
resultado = (20 + 30) *2;  //si se requiere que inicie con la suma, entonces se deja en parentesis ()
resultado = (100 + 200 + 300) *.2;


//console.log(resultado);

//Incrementos

let puntaje = 10;

//Incremento en 1 ++

puntaje++;  //10
++puntaje;  //12

puntaje--; //11

puntaje += 10;  //para incrementar 10 

console.log(--puntaje);  