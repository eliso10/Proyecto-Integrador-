var plantas = [
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
    {
        id: 14,
        nombre: "Cala",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKnbQkbQ3Mxz15xR8g-Qt3X4M4BsifaLfJA&usqp=CAU",
        precio: 350.00,
        descripcion: "Planta de semisombra con colores llamativos apta para tu coleccion"
    },
    {
        id: 15,
        nombre: "Anturio",
        url: "https://www.elmueble.com/medio/2022/05/17/lilac-anturio_9317cc4d_674x674.jpeg",
        precio: 550.00,
        descripcion: "planta de interior con una variedad de colores es una opcion excelente para dar vida a tu hogar ",
    },
    {
        id: 16,
        nombre: "Violeta ",
        url: "https://thumbs.dreamstime.com/b/flores-violetas-de-saintpaulia-podridas-plantar-en-maceta-y-herramientas-jard%C3%ADn-para-plantas-macetas-tablas-madera-198059583.jpg",
        precio: 240.00,
        descripcion: "Planta de luz interior una excelente opcion si lo que buscas es tener una planta resistente y con mucho color"
    },
    
];

var macetas = [
    {
        id: 1,
        nombre: "Esfera Barro",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/Esfera-chica-barro.jpg?resize=300%2C300&ssl=1",
        precio: 250.00,
        descripcion: "Esta es una maceta que resalta mucho con tus plantas mas llamativas",
    },
    {
        id: 2,
        nombre: "Taza Barro",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/Taza-chica.jpg?resize=300%2C300&ssl=1",
        precio: 200.00,
        descripcion: "Una maceta minimalista para tus plantas"
    },
    {
        id: 3,
        nombre: "Esfera Ceramica",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/esfera-grande-fibra.jpg?resize=300%2C300&ssl=1",
        precio: 450.00,
        descripcion: "Una maceta perfecta para resaltar tus plantas ",
    },
    {
        id: 4,
        nombre: "Cubo Ceramica",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/cubo-grande-fibra.jpg?resize=300%2C300&ssl=1",
        precio: 550.00,
        descripcion: "Una maceta muy elegante para tus mejores plantas"
    },
    {
        id: 5,
        nombre: "Jardinera Barro",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/Jardinera-Barro-1.jpg?resize=300%2C300&ssl=1",
        precio: 250.00,
        descripcion: "Jardinera de barro para los minimalistas",
    },
    {
        id: 6,
        nombre: "Jardinera Fibra de Vidrio ",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/jardinera-fibra.jpg?resize=600%2C600&ssl=1",
        precio: 530.00,
        descripcion: "Jardinera elaborada con fibra de vidrio color negro"
    },
];

var herramientas =[
    {
        id: 1,
        nombre: "Fertilizante Nitrofosca 1kg",
        url: "https://elheraldodemartinez.com.mx/images/Articulos2018/Articulo/2020/011Noviembre/28Nov/PAG-3-PRINCIPAL.png",
        precio: 250.00,
        descripcion: "Este fertilizante ayudara a que tu planta crezca y tenga brotes nuevos",
    },
    {
        id: 2,
        nombre: "Fertilizante Florifil 1kg",
        url: "https://agropos.com.br/wp-content/uploads/2022/03/Fertilizante-Para-Planta.jpg",
        precio: 250.00,
        descripcion: "Este fertilizante ayudara a que tus plantas que dan flores tengan aun mas"
    },
    {
        id: 3,
        nombre: "Sistema de Reigo",
        url: "https://m.media-amazon.com/images/I/812q2D0i3sL._AC_UF1000,1000_QL80_.jpg",
        precio: 950.00,
        descripcion: "Es un sistema que te permitira regar de manera facil y sencilla hasta 30m de distancia",
    },
    {
        id: 4,
        nombre: "Kit de Herramientas",
        url: "https://as2.ftcdn.net/v2/jpg/02/65/10/51/1000_F_265105182_1kHISR3wzXYeADjOmnhU8lLvd6EyNxuE.jpg",
        precio: 550.00,
        descripcion: "Todo lo que necesitas para dar mantenimiento a tus preciadas plantas"
    },
    {
        id: 5,
        nombre: "Cinturon de Cuero",
        url: "https://www.elblogdelatabla.com/wp-content/uploads/2020/11/cinturon-jardineria-herramientas-mano-florista-cuero-merifaLeather.jpg",
        precio: 450.00,
        descripcion: "Vuelve mas facil tu trabajo en la jardineria con ayuda de este cinturon perecto para tus herramientas",
    },
    {
        id: 6,
        nombre: "Manguera de Riego ",
        url: "https://plasticforte.com/wp-content/uploads/2022/06/accesorios-jardineria-plasticforte.jpg",
        precio: 500.00,
        descripcion: "Para que tus plantas queden perfectamente regadas utiliza nuestra manguera con soporte a pared"
    },
]

var carrito =[]





//Buscar elementos en la BD de herramientas
function buscarHerramientas(idHerramienta){
var result = herramientas.find(item => item.id === idHerramienta);
return result;
}

//Buscar elementos en la BD de plantas
export  function buscarPlantasid(idPlanta){
    var result = plantas.find(item => item.id === idPlanta);
    return result;
}

//Buscar elementos en la BD de plantas
export function buscarPlantasname(nombrePlanta){
    var result = plantas.find(item => item.nombre === nombrePlanta);
    return result;
}

//Buscar elementos en la BD de macetas
function buscarMacetas(idMacetas){
    var result = macetas.find(item => item.id === idMacetas);
    return result;
}

export  function añadirPlanta(nombre, url, precio, descripcion){
    let lastKey = Object.keys(plantas).pop();
    lastKey++;
    lastKey++;
    herramientas.push({'id': lastKey ,'nombre' : nombre, 'url': url, 'precio': precio, 'descripcion': descripcion});    
}


export function añadirMacetas(nombre, url, precio, descripcion){
    let lastKey = Object.keys(macetas).pop();
    lastKey++;
    lastKey++;
    herramientas.push({'id': lastKey ,'nombre' : nombre, 'url': url, 'precio': precio, 'descripcion': descripcion}); 
}

export function añadirHerramientas(nombre, url, precio, descripcion){
    let lastKey = Object.keys(herramientas).pop();
    lastKey++;
    lastKey++;
    herramientas.push({'id': lastKey ,'nombre' : nombre, 'url': url, 'precio': precio, 'descripcion': descripcion}); 
}

export function añadirCarrito(producto){

    const isFound = carrito.some(element => {
        if (element.id === producto.id) {
        return true;
        }
        else return false;
    });

    if (isFound == false){
        carrito.push(producto)
        producto.cantidad = 1; 
    } 
    else{ 
        console.log("This item already exists");
        const index = carrito.findIndex(object => {
            return object.id === producto.id;
          });
        carrito[index].cantidad++;
    }
   
   
    localStorage.setItem('carrito', JSON.stringify(carrito));
    carrito = JSON.parse(localStorage.getItem('carrito'));
    console.log(carrito);
}



console.log(carrito);


añadirHerramientas("Martillo", 'https://www.hm.supply/products/martillo-una', 'https://www.hm.supply/products/martillo-una', 300.00, 'ciowjiefmwinfiwniiniun');


console.log(buscarHerramientas(2));
console.log(herramientas);

herramientas.push({'id': 1 ,'nombre' :'Manguera de Riego', 'url': 'https://plasticforte.com/wp-content/uploads/2022/06/accesorios-jardineria-plasticforte.jpg', 'precio': 500.00, 'descripcion': 'Para que tus plantas queden perfectamente regadas utiliza nuestra manguera con soporte a pared'});
console.log(herramientas);

export {plantas}; 
export {macetas}; 
export {herramientas};
export {carrito};
