//Notification API

const boton = document.querySelector('#boton');
boton.addEventListener('click', () => {   //la funcion que nos permite agregar un evento a la variable boton
    Notification.requestPermission()
        .then(resultado => console.log('El resultados es: ', resultado))
}) 

if (Notification.permission == 'granted') {
    new Notification('Esta es una notificacion', {
        icon: 'img/ccj.png', 
        body: 'Codigo con Juan, los mejores tutoriales '
    })
}