const containerCards = document.getElementById('container-cards');


import {loMasPedido} from './base_Datos_CP.js'
import {buscarloMasPedidoname} from './base_Datos_CP.js'

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
    const elementsProduct = {
        nombre: document.createElement('h1'),
        descripcion: document.createElement('p'),
        precio: document.createElement('p'),
        button: document.createElement('button'),
    }
    
    return elementsProduct;
}


const populateElements = (infoProductos, producto) => {
    infoProductos.nombre.textContent = producto.nombre ;
    infoProductos.descripcion.textContent = producto.descripcion;
    infoProductos.precio.textContent = "$"+producto.precio+" / pesos";
    infoProductos.button.textContent = "Al Carrito";

    infoProductos.nombre.classList.add("nombreProducto");
    infoProductos.precio.classList.add("precio");
    infoProductos.descripcion.classList.add("decripcion");
    infoProductos.button.classList.add("botonTarjeta");

    return infoProductos;
}

const renderElements = (elements, card, producto) => {
    const img = document.createElement('img');
    img.src = producto.url;
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


loMasPedido.forEach(producto => {
    const card = createCard();
    const elementsProduct = createDescription();
    const populatedElements = populateElements(elementsProduct, producto);
    renderElements(populatedElements, card, producto);
    containerCards.appendChild(card);

});

containerCards.addEventListener('click', e => {
    if(e.target.classList.contains('botonTarjeta') ){
        const productoTarjeta = e.target.parentElement;
        console.log(productoTarjeta);

        // //En caso de ser necesario se creo un objeto de java desde el arreglo directo
        const infoProduct = (productoTarjeta.querySelector('.nombreProducto').textContent);
        console.log(infoProduct);
        const elementoBD = buscarloMasPedidoname(infoProduct);
        console.log(elementoBD);
        
    }

});