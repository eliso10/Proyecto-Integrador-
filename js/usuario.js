const usuarioEstatus = document.getElementById('Usuario-Estatus');
const segundoEstatus = document.getElementById('Segundo-Estatus');
const primerEstatus = document.getElementById('Primer-Estatus');


let ActualizacionEstatus = false;


function actualizacion () {
    if(ActualizacionEstatus === true){
        usuarioEstatus.innerHTML = '<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Usuario</a><ul class="dropdown-menu"><li id="Primer-Estatus"><a class="dropdown-item" href="#">Perfil</a></li><li id="Segundo-Estatus"><a class="dropdown-item" href="#">Cerrar Sesion</a></li></ul>'; 
    } else {
        usuarioEstatus.innerHTML = '<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Iniciar sesión</a><ul class="dropdown-menu"><li id="Primer-Estatus"><a class="dropdown-item" href="#">Ingresa a tu cuenta</a></li><li id="Segundo-Estatus"><a class="dropdown-item" href="#">Regístrate</a></li></ul>' ;
    }
}

segundoEstatus.addEventListener('click', function () {
    ActualizacionEstatus = false;
    //actualizacion();
});

primerEstatus.addEventListener('click', function () {
    ActualizacionEstatus = true;
    //actualizacion();
});

actualizacion();
