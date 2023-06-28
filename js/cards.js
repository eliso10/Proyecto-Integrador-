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
    },
    {
        id: 5,
        nombre: "ECHEVERIA",
        url: "https://como-plantar.com/wp-content/uploads/2021/09/cuidar-y-cultivar-Echeveria-Peacockii.jpg.webp",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex"
    },
    {
        id: 6,
        nombre: "Kalanchoe",
        url: "https://como-plantar.com/wp-content/uploads/2023/01/como-plantar-Flor-de-la-fortuna-o-Kalanchoe.jpg.webp",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex"
    },
    {
        id: 7,
        nombre: "Begonia",
        url: "https://como-plantar.com/wp-content/uploads/2023/01/cuidados-y-como-plantar-begonias.jpg.webp",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex"
    },
    {
        id: 8,
        nombre: "Cactus mini",
        url: "https://como-plantar.com/wp-content/uploads/2021/09/cultivar-y-cuidar-cactus-oreja-de-conejo.jpg.webp",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex"
    },
    {
        id: 9,
        nombre: "Mini rosa",
        url: "https://como-plantar.com/wp-content/uploads/2023/02/plantar-cuidar-rosas-de-pitimini-o-rosal-minirosas-de-pitimini-o-rosal-mini.jpg.webp",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex"
    },
    {
        id: 10,
        nombre: "Peperomía",
        url: "https://como-plantar.com/wp-content/uploads/2023/03/cuidados-y-como-plantar-peperomia.jpg.webp",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex"
    },
    
    
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
    card.classList.add('col-sm-4', 'card', 'e1_2');
    imgContainer.classList.add('e1_7');
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
    infoPlantas.button.textContent = "Ver más";

    infoPlantas.nombre.classList.add("e1_4");
    infoPlantas.precio.classList.add("e1_5");
    infoPlantas.descripcion.classList.add("e1_6");
    infoPlantas.button.classList.add("e2_8");

    return infoPlantas;
}

const renderElements = (elements, card, planta) => {
    const img = document.createElement('img');
    img.src = planta.url;
    img.classList.add('img-fluid');
    img.alt = "Responsive image";
    console.log(card.url);
    

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