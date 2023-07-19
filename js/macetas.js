const containerCards = document.getElementById('container-cards');


import {macetas} from './base_Datos_CP.js'
import { buscarMacetasname } from './base_Datos_CP.js';

const createCard = () => {
    const card = document.createElement('div');
    const imgContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    card.classList.add('col-sm-4', 'card', 'tarjetaContenedor');
    imgContainer.classList.add('imagenProducto');
    card.append(imgContainer, infoContainer);
    return card
}

const createDescription = () => {
    const elementsPot = {
        nombre: document.createElement('h1'),
        descripcion: document.createElement('p'),
        precio: document.createElement('p'),
        button: document.createElement('button'),
    }
    
    return elementsPot;
}


const populateElements = (infoPot, pot) => {
    infoPot.nombre.textContent = pot.nombre ;
    infoPot.descripcion.textContent = pot.descripcion;
    infoPot.precio.textContent = "$"+pot.precio+" / pesos";
    infoPot.button.textContent = "Al Carrito";

    infoPot.nombre.classList.add("nombreProducto");
    infoPot.precio.classList.add("precio");
    infoPot.descripcion.classList.add("decripcion");
    infoPot.button.classList.add("botonTarjeta");

    return infoPot;
}

const renderElements = (elements, card, pot) => {
    const img = document.createElement('img');
    img.src = pot.url;
    img.classList.add('img-fluid');
    img.alt = "Responsive image";
    
    card.children[0].append(img);

    card.children[0].append(img);
    /* modificación para estilos de tarjetas, se creó constante information */
    elements.descripcion.classList.add('text-justify');
    const information = document.createElement('div');
    information.classList.add('informacionContainer')
    information.append( elements.descripcion);
    card.children[1].append(elements.nombre, elements.precio, information, elements.button);
}


macetas.forEach(pot => {
    const card = createCard();
    const elementsPot = createDescription();
    const populatedElements = populateElements(elementsPot, pot);
    renderElements(populatedElements, card, pot);
    containerCards.appendChild(card);
});

containerCards.addEventListener('click', e => {
    if(e.target.classList.contains('botonTarjeta') ){
        const productoTarjeta = e.target.parentElement;
        console.log(productoTarjeta);

        // //En caso de ser necesario creó un onjeto de java desde el arreglo directo
        const infoProduct = (productoTarjeta.querySelector('.nombreProducto').textContent);
        console.log(infoProduct);
        const elementoBD = buscarMacetasname(infoProduct);
        console.log(elementoBD);
        
        
    }
});