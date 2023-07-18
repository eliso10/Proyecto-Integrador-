const fullName = document.getElementById('fullName');
const state = document.getElementById('state');
const city = document.getElementById('city');
const neighborhood = document.getElementById('neighborhood');
const postalCode = document.getElementById('postalCode');
const streetNumber = document.getElementById('streetNumber');
const celphone = document.getElementById('celphone');
const references = document.getElementById('references');
const spanCarrito = document.getElementById('carritoIcon');
const form = document.getElementById('payment');

//regex
const regexName = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
const regexPhone = /^\d{10}$/;

    //poblar alert
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
    alertPlaceholder.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
    
    alertPlaceholder.append()
    }

//revision de los campos con el regex
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  if(!regexName.test(fullName.value) || state.value === 'Estado' || city.length == 0 || neighborhood.length == 0 || postalCode.length == 0 || streetNumber.length == 0 || !regexPhone.test(celphone.value)){
    appendAlert('Verifica la información', 'danger'); 

  } else{
    //data en JSON object si es coorecta la informacion
    const data = new FormData(event.target);
    const allData = Object.fromEntries(data.entries());

    //se muestra en consola el objeto json
    console.log(JSON.stringify(allData));

    //Enviar a la pagina de inicio si se inicia sesion exitosamente
      //window.location.href = '../index.html';
      appendAlert('¡Gracias! Hemos guardado esta información para el envío', 'success');
  }
})




import * as dateBase from "./base_Datos.js";

var carrito = JSON.parse(localStorage.getItem('carrito'));

console.log(dateBase.carrito);
console.log(carrito);

// FUNCION PARA CONTADOR DEL CARRITO
function contadorCarrito(){
    let badge = document.createElement('span');
    badge.classList.add('position-absolute', 'translate-middle', 'badge', 'rounded-pill', 'bg-danger');
    badge.setAttribute('id', 'carritoContador');
    badge.textContent = carrito.length;
    spanCarrito.appendChild(badge); 
    localStorage.setItem('carrito', JSON.stringify(carrito));
    carrito = JSON.parse(localStorage.getItem('carrito'));
}

contadorCarrito();