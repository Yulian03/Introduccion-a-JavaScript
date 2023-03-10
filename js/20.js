//Metodos de propiedad
const reproductor = {   //objeto
    reproducir : function(id) {  //funcion
        console.log (`Reproduciendo cancion con el Id: ${id}`)
    },
    pausar : function(){
        console.log('Pausando ...')
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la playlist de nombre: ${nombre}`)
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo la playlist de nombre: ${nombre}`)
    }
}
// Se pueden colcar funciones por fuera del objeto

reproductor.borrarCancion = function(id){
    console.log(`Eliminado la cancion del Id: ${id}`)
}

reproductor.reproducir(3480);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');

