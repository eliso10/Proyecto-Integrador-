const usuarioEstatus = document.getElementById('Usuario-Estatus');

//localStorage.setItem('UserStatus', true);

function actualizacion () {
    let ActualizacionEstatus = JSON.parse(localStorage.getItem('UserStatus'));
    console.log("Elemento del local Store: "+JSON.parse(localStorage.getItem('UserStatus')));
    console.log(usuarioEstatus);

    if(ActualizacionEstatus){
        usuarioEstatus.innerHTML = '<a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">ElIso</a><ul class="dropdown-menu"><li id="Primer-Estatus"><a class="dropdown-item" href="/pages/admin.html">Perfil</a></li><li class="Segundo-Estatus"><a class="dropdown-item" href="#" onclick="CerrarSesion()">Cerrar Sesion</a></li></ul>'; 
    } 
}

actualizacion();

function CerrarSesion(){
    localStorage.setItem('UserStatus', "false");
    console.log(JSON.parse(localStorage.getItem('UserStatus')));
    window.location.href = '../index.html';
}

