// const plantas = require('./data_pruebas');
const containerCards = document.getElementById('container-cards');

import {plantas} from './base_Datos.js'
import {buscarPlantasname} from './base_Datos.js'
import * as dateBase from "./base_Datos.js";

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
    elements.descripcion.classList.add('text-justify');
    const información = document.createElement('div');
    información.classList.add('informacionContainer')
    información.append( elements.descripcion);
    card.children[1].append(elements.nombre,  elements.precio, información, elements.button);
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
        console.log(productoTarjeta.querySelector('.nombreProducto').textContent);

        // //En caso de ser necesario creó un objeto de java desde el arreglo directo
        const infoProduct = (productoTarjeta.querySelector('.nombreProducto').textContent);
        console.log(infoProduct);
        const elementoBD = buscarPlantasname(infoProduct);
        console.log(typeof(elementoBD));
        dateBase.añadirCarrito(elementoBD);
        
    
    }
});



  
    //     const containerProduct = document.createElement('div'); 
    //     containerProduct.setAttribute('class', 'row p-2 bg border rounded itemComp align-items-center');

    //     containerProduct.innerHTML = '<div class="col-md-3 mt-1">'+
    //     '<img class="img-fluid img-responsive rounded product-image" src="https://como-plantar.com/wp-content/uploads/2021/09/cultivar-y-cuidar-cactus-oreja-de-conejo.jpg.webp">'+
    //             '</div>'+
    //             '<div class="col-md-6 mt-1 row informacion">'+
    //                 '<h5 class="d-flex justify-content-start NombreTarjeta">Cactus mini</h5>'+
    //                 '<div class=" d-flex justify-content-start mt-1 mb-1 spec-1"><span>Diseño Unico</span><span class="dot"></span><span>Casa</span><span class="dot"></span><span>Oficina<br></span></div>'+
    //                 '<p class="justify-content-start text-justify para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.<br><br></p>'+
    //             '</div>'+
    //             '<div class="align-items-center align-content-center  col-md-3 border-left mt-1 row">'+
    //                     '<div class="d-flex flex-row justify-content-center">'+
    //                         '<h1 class="mr-1">$13.99</h1>'+
    //                     '</div>'+
    //                     '<h6 class="text-success">Free shipping</h6>'+
    //                     '<div class="d-flex flex-column mt-4">'+
    //                     '<button class="btn btn-primary btn-sm" type="button">Borrar</button>'+
    //                     '<div class="row justify-content-around">'+
    //                         '<button class="btn  btn-primary btn-sm col-5 mt-2" type="button">Añadir</button>'+
    //                         '<button class="btn  btn-primary btn-sm col-5 mt-2" type="button">Restar</button>'+
    //                     '</div>'+
    //                 '</div>'+
    //             '</div>';
    // mainContainerTarjetas.appendChild(containerProduct);