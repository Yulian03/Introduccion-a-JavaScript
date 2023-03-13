//Async /Await

function descargarNuevosClientes () {
    return new Promise (resolve => {
        console.log('Descargando clientes ..... espere...');
        
        setTimeout ( () => {
            resolve ('Los clientes fueron descargados');
        }, 5000 );
    });
}

function descargarUltimosPedidos () {
    return new Promise (resolve => {
        console.log('Descargando pedidos ..... espere...');
        
        setTimeout ( () => {
            resolve ('Los pedidos fueron descargados');
        }, 3000 );
    });
}


async function app (){
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarNuevosClientes(); //Este codigo se ejecutara hasta que se haya realizado el de arriba 
        // console.log(clientes); 
        // console.log(pedidos);  
        
        const resultado = await Promise.all ([descargarNuevosClientes(), descargarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error){
        console.log (error);
    }
}
app();





// setTimeout( function () {    //despues de 3 segundos va a mostrar la palabra set timeout
//     console.log('set Timeout...')
// }, 3000);

// setInterval ( function () {    //cada 3 segundos enviar la palabra 
//     console.log('set Timeout...')
// }, 3000);