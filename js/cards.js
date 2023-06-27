// const plantas = require('./data_pruebas');
const containerCards = document.getElementById('container-cards');

const plantas = [
    {
        id: 1,
        nombre: "SANSEVIERIA",
        url: "https://hips.hearstapps.com/hmg-prod/images/plantas-de-interior-resistentes-2-1543351859.jpg?crop=1xw:1xh;center,top&resize=980:*",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex",
    },
    {
        id: 2,
        nombre: "CROTÓN",
        url: "https://hips.hearstapps.com/hmg-prod/images/garden-croton-or-variegated-croton-euphorbiaceae-news-photo-1670849839.jpg?crop=1xw:1xh;center,top&resize=980:*",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex"
    },
    {
        id: 3,
        nombre: "HELECHO",
        url: "https://hips.hearstapps.com/hmg-prod/images/helecho-natural-1631189259.png?crop=1xw:1xh;center,top&resize=980:*",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex"
    },
    {
        id: 4,
        nombre: "ECHEVERIA",
        url: "https://hips.hearstapps.com/hmg-prod/images/echeveria-flower-arrangement-news-photo-1670855481.jpg?crop=1xw:1xh;center,top&resize=980:*",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex"
    }
]

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
    card.classList.add('col-sm-4', 'card');
    card.append(imgContainer, infoContainer);
    return card
}

const createDescription = () => {
    const infoPlantas = {
        nombre: document.createElement('h3'),
        descripcion: document.createElement('p'),
        precio: document.createElement('p'),
    }
    return infoPlantas;
}


const populateElements = (plantas, planta) => {
    plantas.nombre.textContent = planta.nombre;
    plantas.descripcion.textContent = planta.descripcion;
    plantas.precio.textContent = planta.precio;
}

const renderElements = (card, info) => {
    const img = document.createElement('img');
    img.src = info.url;
    img.classList.add('img-fluid');
    console.log(info.url);

    card.children[0].append(img);
    card.children[1].append(info.nombre, info.descripcion, info.precio);
}


plantas.forEach(planta => {
    const card = createCard();
    const infoPlantas = createDescription();
    const populatedElements = populateElements(infoPlantas, planta);
    renderElements(card, planta);
    containerCards.appendChild(card);
});