
const imgTargeta = document.getElementById('imagenMaceta');
const TituloTargeta = document.getElementById('titulos');
const DescrpionTargeta = document.getElementById('descripcionProducto');



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
        nombre: "CROTÓ",
        url: "https://hips.hearstapps.com/hmg-prod/images/garden-croton-or-variegated-croton-euphorbiaceae-news-photo-1670849839.jpg?crop=1xw:1xh;center,top&resize=980:*",
        precio: 14.02,
        descripcion: "Lorem Ipsum is simply dummy tex"
    },
    {
        id: 3,
        nombre: "HELECHO BOSTON otrosss",
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
    {
        id: 11,
        nombre: "Palma Areca",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/Palma-Areca-Gd.jpg?fit=1080%2C1080&ssl=1",
        precio: 250.00,
        descripcion: "planta de interior excelente para dar vida a tu sala",
    },
    {
        id: 12,
        nombre: "Muñeca",
        url: "https://hagearbeider.com/wp-content/uploads/2021/02/1612526530_480_Omsorg-for-den-vakre-cordyline-tango.jpg",
        precio: 240.00,
        descripcion: "Planta de sombra da color a tus espacios con su tonalidad llamativa"
    },
    {
        id: 13,
        nombre: "Orquideas",
        url: "https://editorialtelevisa.brightspotcdn.com/dims4/default/03eabb0/2147483647/strip/true/crop/1194x672+3+0/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2022%2F07%2Forquidea.jpg",
        precio: 750.00,
        descripcion: "Una planta que resalta por su elegancia y belleza excelente para mostrarla en tu casa o en tu oficina",
    },
]

console.log(plantas);

const RenderProducto = (idPeticion) => {
    var found = plantas.find(e => e.id == idPeticion);
    console.log(found);
    imgTargeta.src =  found.url;
    TituloTargeta.textContent = found.nombre;
    DescrpionTargeta.textContent = found.descripcion;

}

RenderProducto(1);

