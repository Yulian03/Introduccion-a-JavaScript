async function obtenerEmpleados () {
    
    const archivo = 'empleados.json';

    // fetch(archivo) //Toma una url
    //     .then( resultado =>  resultado.json ())
    //     .then( datos => {
    //             console.log(datos.empleados);

    //             const { empleados } = datos;
    //             console.log(empleados);
    //         })
     const resultado = await fetch(archivo);  
     const datos = await resultado.json();
     console.log(datos); 
}
obtenerEmpleados();