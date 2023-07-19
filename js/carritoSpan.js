const spanCarrito = document.getElementById('carritoIcon');

//var badge = document.createElement('span');
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