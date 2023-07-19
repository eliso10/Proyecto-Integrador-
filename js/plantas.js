// const plantas = require('./data_pruebas');
const containerCards = document.getElementById('container-cards');

import {plantas} from './base_Datos_CP.js'
import {buscarPlantasname} from './base_Datos_CP.js'


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
    const elementsPlant = {
        nombre: document.createElement('h1'),
        descripcion: document.createElement('p'),
        precio: document.createElement('p'),
        button: document.createElement('button'),
    }
    
    return elementsPlant;
}


const populateElements = (infoPlantas, planta) => {
    infoPlantas.nombre.textContent = planta.nombre ;
    infoPlantas.descripcion.textContent = planta.descripcion;
    infoPlantas.precio.textContent = "$"+planta.precio+" / pesos";
    infoPlantas.button.textContent = "Al Carrito";

    infoPlantas.nombre.classList.add("nombreProducto");
    infoPlantas.precio.classList.add("precio");
    infoPlantas.descripcion.classList.add("decripcion");
    infoPlantas.button.classList.add("botonTarjeta");

    return infoPlantas;
}

const renderElements = (elements, card, planta) => {
    const img = document.createElement('img');
    img.src = planta.url;
    img.classList.add('img-fluid');
    img.alt = "Responsive image";
    
    card.children[0].append(img);
    /* modificación para estilos de tarjetas, se creó constante information */
    elements.descripcion.classList.add('text-justify');
    const information = document.createElement('div');
    information.classList.add('informacionContainer')
    information.append( elements.descripcion);
    card.children[1].append(elements.nombre, elements.precio, information, elements.button);
}


plantas.forEach(planta => {
    const card = createCard();
    const elementsPlant = createDescription();
    const populatedElements = populateElements(elementsPlant, planta);
    renderElements(populatedElements, card, planta);
    containerCards.appendChild(card);
});


containerCards.addEventListener('click', e => {
    if(e.target.classList.contains('botonTarjeta') ){
        const productoTarjeta = e.target.parentElement;
        console.log(productoTarjeta);

        // //En caso de ser necesario creó un onjeto de java desde el arreglo directo
        const infoProduct = (productoTarjeta.querySelector('.nombreProducto').textContent);
        console.log(infoProduct);
        const elementoBD = buscarPlantasname(infoProduct);
        console.log(elementoBD);
   
    }
});