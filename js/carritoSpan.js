const spanCarrito = document.getElementById('carritoIcon');

//var badge = document.createElement('span');
import * as dateBase from "./base_Datos.js";

let carrito = JSON.parse(localStorage.getItem('carrito'));

console.log(dateBase.carrito);
console.log(carrito);

// FUNCION PARA CONTADOR DEL CARRITO
export function contadorCarrito(){
    spanCarrito.innerHTML = "";
    var imgCarrito = document.createElement('IMG');
    imgCarrito.setAttribute('src', '../assets/icons/iconoCarrito.png');
    imgCarrito.setAttribute('id', 'iconoCarrito');
    let badge = document.createElement('span');
    badge.classList.add('position-absolute', 'translate-middle', 'badge', 'rounded-pill', 'bg-danger');
    badge.setAttribute('id', 'carritoContador');
    badge.textContent = carrito.length;
    spanCarrito.append(imgCarrito, badge); 
}

contadorCarrito();