// const plantas = require('./data_pruebas');
const containerCards = document.getElementById('container-cards');

import {plantas} from './base_Datos.js'

//const plantas = require('./data_pruebas') ;

// const getPlantas = () => {
//     return plantas;
// }

// const getPlanta = id => {
//     return plantas.find(plantas => plantas.id === id)
// }

// console.log(getPlantas());
// console.log(getPlanta(1));




const createCard = () => {
    const card = document.createElement('div');
    const imgContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    card.classList.add('col-sm-4', 'card2', 'tarjetaContenedor');
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
    card.children[1].append(elements.nombre, elements.descripcion, elements.precio, elements.button);
}


plantas.forEach(planta => {
    const card = createCard();
    const elementsPlant = createDescription();
    const populatedElements = populateElements(elementsPlant, planta);
    renderElements(populatedElements, card, planta);
    containerCards.appendChild(card);
});