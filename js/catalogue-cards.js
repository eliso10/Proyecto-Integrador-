// const plantas = require('./data_pruebas');
const containerCards = document.getElementById('container-cards');

const plantas = [
    {
        id: 1,
        nombre: "Tierra fresca con hojarasca",
        url: "https://hips.hearstapps.com/hmg-prod/images/plantas-de-interior-resistentes-2-1543351859.jpg?crop=1xw:1xh;center,top&resize=980:*",
        precio: 14.02,
        descripcion: "",
    },
    {
        id: 2,
        nombre: "CROTÓN",
        url: "https://hips.hearstapps.com/hmg-prod/images/garden-croton-or-variegated-croton-euphorbiaceae-news-photo-1670849839.jpg?crop=1xw:1xh;center,top&resize=980:*",
        precio: 14.02,
        descripcion: ""
    },
    {
        id: 3,
        nombre: "HELECHO",
        url: "https://hips.hearstapps.com/hmg-prod/images/helecho-natural-1631189259.png?crop=1xw:1xh;center,top&resize=980:*",
        precio: 14.02,
        descripcion: ""
    }
]



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
    card.children[1].append(elements.nombre, elements.descripcion, elements.precio, elements.button);
}


plantas.forEach(planta => {
    const card = createCard();
    const elementsPlant = createDescription();
    const populatedElements = populateElements(elementsPlant, planta);
    renderElements(populatedElements, card, planta);
    containerCards.appendChild(card);
});