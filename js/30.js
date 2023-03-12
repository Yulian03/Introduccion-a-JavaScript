//PROMISE

const usuarioAutenticado = new Promise ( (resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve ('Usuario autenticado');  //El promise se cumple
    }else {
        reject ('No es posible iniciar sesion');  //El promise no se cumple
    }
});
 usuarioAutenticado 
    .then ( resultado => console.log(resultado))
    .catch ( error => console.log (error))



//EN LOS PROMISES EXISTEN 3 VALORES
//1. Pending : No se ha cumplido pero tampoco se ha rechazado -- tambien indica que hace falta algo en el promise
//2. Fulfilled : Ya se cumplio 
//3. Rejected : Se ha rechazado o  no se ha podido cumplir 
