var loMasPedido = [
    {
        id: 5,
        nombre: "ECHEVERIA",
        url: "https://www.tuacasa.com.br/wp-content/uploads/2023/03/echeveria-elegans-1.png",
        precio: 140.00,
        descripcion: "La más bella de las suculentas con el más dócil de los cuidados"
    },
    {
        id: 3,
        nombre: "ESFERA CERÁMICA",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/esfera-grande-fibra.jpg?resize=300%2C300&ssl=1",
        precio: 450.00,
        descripcion: "Una maceta perfecta para resaltar tus plantas",
    },
    {
        id: 4,
        nombre: "KIT DE HERRAMIENTAS",
        url: "https://as2.ftcdn.net/v2/jpg/02/65/10/51/1000_F_265105182_1kHISR3wzXYeADjOmnhU8lLvd6EyNxuE.jpg",
        precio: 550.00,
        descripcion: "Todo lo que necesitas para dar mantenimiento a tus preciadas plantas"
    },
    {
        id: 16,
        nombre: "VIOLETA ",
        url: "https://thumbs.dreamstime.com/b/flores-violetas-de-saintpaulia-podridas-plantar-en-maceta-y-herramientas-jard%C3%ADn-para-plantas-macetas-tablas-madera-198059583.jpg",
        precio: 240.00,
        descripcion: "Planta de luz interior, una excelente opción si lo que buscas es tener una planta resistente y con mucho color"
    }
]

var plantas = [
    {
        id: 1,
        nombre: "SANSEVIERIA",
        url: "https://images.hola.com/imagenes/decoracion/20220818215417/sansevieria-trifasciata-cuidados-planta-interior-nu/1-126-655/Sansevieria-trifasciata-cuidados-t.jpg",
        precio: 140.00,
        descripcion: "Bonita y elegante, quedará ideal en la decoración interior de tu hogar",
    },
    {
        id: 2,
        nombre: "CROTÓ",
        url: "https://d3ugyf2ht6aenh.cloudfront.net/stores/913/526/products/croton-petra-31-ad0e57592d1a44fc4b16344203153457-1024-1024.webp",
        precio: 250.00,
        descripcion: "Es una de las plantas de interior que posee la mayor gama de colores vivos en sus hojas, requiere mucha luz"
    },
    {
        id: 3,
        nombre: "HELECHO BOSTON",
        url: "https://hips.hearstapps.com/es.h-cdn.co/mcres/images/media/images/helecho/1539006-1-esl-ES/helecho.jpg",
        precio: 180.00,
        descripcion: "Un bello ejemplar, de fácil mantenimiento y destacada capacidad para purificar el ambiente"
    },
    {
        id: 4,
        nombre: "ECHEVERIA",
        url: "https://www.tuacasa.com.br/wp-content/uploads/2023/03/echeveria-elegans-1.png",
        precio: 140.00,
        descripcion: "La más bella de las suculentas con el más dócil de los cuidados"
    },
    {
        id: 5,
        nombre: "ECHEVERIA GOLD",
        url: "https://como-plantar.com/wp-content/uploads/2021/09/cuidar-y-cultivar-Echeveria-Peacockii.jpg.webp",
        precio: 200.00,
        descripcion: "Tu especie favorita de suculenta con un color sumamente especial"
    },
    {
        id: 6,
        nombre: "KALANCHOE",
        url: "https://como-plantar.com/wp-content/uploads/2023/01/como-plantar-Flor-de-la-fortuna-o-Kalanchoe.jpg.webp",
        precio: 80.00,
        descripcion: "De luz abundante y riego moderado, sus flores son un estallido de color"
    },
    {
        id: 7,
        nombre: "BEGONIA",
        url: "https://h2.commercev3.net/cdn.brecks.com/images/800/75696.jpg",
        precio: 150.00,
        descripcion: "Una especie que destaca por sus hermosas flores y su vistoso follaje"
    },
    {
        id: 8,
        nombre: "CACTUS MINI",
        url: "https://como-plantar.com/wp-content/uploads/2021/09/cultivar-y-cuidar-cactus-oreja-de-conejo.jpg.webp",
        precio: 45.00,
        descripcion: "Una pequeña muestra del reino de las cactáceas, poco riego, ¡mucho sol!"
    },
    {
        id: 9,
        nombre: "MINI ROSA",
        url: "https://agronomaster.com/wp-content/uploads/2018/08/cuidado-de-las-rosas-en-macetas-1.jpg",
        precio: 50.00,
        descripcion: "Tipo de variedad del rosal que te fascinará por su tamaño y su amplia variedad de tonalidades"
    },
    {
        id: 10,
        nombre: "PEPEROMÍA",
        url: "https://como-plantar.com/wp-content/uploads/2023/03/cuidados-y-como-plantar-peperomia.jpg.webp",
        precio: 130.00,
        descripcion: "Es una planta de interior de lo más decorativa, gracias a sus frondosas ramas y a sus hojas bellas y originales"
    },
    {
        id: 11,
        nombre: "PALMA ARECA",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/Palma-Areca-Gd.jpg?fit=1080%2C1080&ssl=1",
        precio: 250.00,
        descripcion: "Planta de interior, excelente para dar vida a tu sala de estar",
    },
    {
        id: 12,
        nombre: "MUÑECA",
        url: "https://hagearbeider.com/wp-content/uploads/2021/02/1612526530_480_Omsorg-for-den-vakre-cordyline-tango.jpg",
        precio: 240.00,
        descripcion: "Planta de sombra, da color a tus espacios con su tonalidad llamativa"
    },
    {
        id: 13,
        nombre: "ORQUÍDEAS",
        url: "https://editorialtelevisa.brightspotcdn.com/dims4/default/03eabb0/2147483647/strip/true/crop/1194x672+3+0/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2022%2F07%2Forquidea.jpg",
        precio: 750.00,
        descripcion: "Una planta que resalta por su elegancia y belleza, excelente para mostrarla en tu casa o en tu oficina",
    },
    {
        id: 14,
        nombre: "CALA",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbKnbQkbQ3Mxz15xR8g-Qt3X4M4BsifaLfJA&usqp=CAU",
        precio: 350.00,
        descripcion: "Planta de semisombra con colores llamativos apta para tu colección"
    },
    {
        id: 15,
        nombre: "ANTURIO",
        url: "https://www.elmueble.com/medio/2022/05/17/lilac-anturio_9317cc4d_674x674.jpeg",
        precio: 550.00,
        descripcion: "Planta de interior con una variedad de colores, es una opción excelente para dar vida a tu hogar ",
    },
    {
        id: 16,
        nombre: "VIOLETA",
        url: "https://thumbs.dreamstime.com/b/flores-violetas-de-saintpaulia-podridas-plantar-en-maceta-y-herramientas-jard%C3%ADn-para-plantas-macetas-tablas-madera-198059583.jpg",
        precio: 240.00,
        descripcion: "Planta de luz interior, una excelente opción si lo que buscas es tener una planta resistente y con mucho color"
    },
    
];

var macetas = [
    {
        id: 1,
        nombre: "ESFERA BARRO",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/Esfera-chica-barro.jpg?resize=300%2C300&ssl=1",
        precio: 250.00,
        descripcion: "Una maceta que enmarcará tus plantas más llamativas",
    },
    {
        id: 2,
        nombre: "TAZA BARRO",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/Taza-chica.jpg?resize=300%2C300&ssl=1",
        precio: 200.00,
        descripcion: "Una maceta minimalista para tu espacio"
    },
    {
        id: 3,
        nombre: "ESFERA CERÁMICA",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/esfera-grande-fibra.jpg?resize=300%2C300&ssl=1",
        precio: 450.00,
        descripcion: "Una maceta perfecta para resaltar tus plantas",
    },
    {
        id: 4,
        nombre: "CUBO CERÁMICA",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/cubo-grande-fibra.jpg?resize=300%2C300&ssl=1",
        precio: 550.00,
        descripcion: "La maceta ideal para complementar un espacio elegante"
    },
    {
        id: 5,
        nombre: "JARDINERA BARRO",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/Jardinera-Barro-1.jpg?resize=300%2C300&ssl=1",
        precio: 250.00,
        descripcion: "Jardinera de barro para los detalles minimalistas",
    },
    {
        id: 6,
        nombre: "JARDINERA FIBRA DE VIDRIO ",
        url: "https://i0.wp.com/plantify.mx/wp-content/uploads/2021/10/jardinera-fibra.jpg?resize=600%2C600&ssl=1",
        precio: 530.00,
        descripcion: "Jardinera elaborada con fibra de vidrio color negro"
    },
];

var herramientas =[
    {
        id: 1,
        nombre: "FERTILIZANTE NITROFOSCA",
        url: "https://elheraldodemartinez.com.mx/images/Articulos2018/Articulo/2020/011Noviembre/28Nov/PAG-3-PRINCIPAL.png",
        precio: 250.00,
        descripcion: "Este fertilizante ayudará a que tu planta crezca saludable y tenga brotes nuevos",
    },
    {
        id: 2,
        nombre: "FERTILIZANTE FLORIFIL",
        url: "https://agropos.com.br/wp-content/uploads/2022/03/Fertilizante-Para-Planta.jpg",
        precio: 250.00,
        descripcion: "Este fertilizante potenciará el desarrollo de flores en tus plantas"
    },
    {
        id: 3,
        nombre: "SISTEMA DE RIEGO",
        url: "https://m.media-amazon.com/images/I/812q2D0i3sL._AC_UF1000,1000_QL80_.jpg",
        precio: 950.00,
        descripcion: "Es una herramienta que te permitirá regar de manera fácil y práctica hasta 30m de distancia",
    },
    {
        id: 4,
        nombre: "KIT DE HERRAMIENTAS",
        url: "https://as2.ftcdn.net/v2/jpg/02/65/10/51/1000_F_265105182_1kHISR3wzXYeADjOmnhU8lLvd6EyNxuE.jpg",
        precio: 550.00,
        descripcion: "Todo lo que necesitas para dar mantenimiento a tus preciadas plantas"
    },
    {
        id: 5,
        nombre: "CINTURÓN DE CUERO",
        url: "https://www.elblogdelatabla.com/wp-content/uploads/2020/11/cinturon-jardineria-herramientas-mano-florista-cuero-merifaLeather.jpg",
        precio: 450.00,
        descripcion: "Vuelve mas fácil tu trabajo en la jardinería con ayuda de este cinturón perecto para tus herramientas",
    },
    {
        id: 6,
        nombre: "MANGUERA DE RIEGO ",
        url: "https://plasticforte.com/wp-content/uploads/2022/06/accesorios-jardineria-plasticforte.jpg",
        precio: 500.00,
        descripcion: "Para que tus plantas queden perfectamente regadas, utiliza nuestra manguera con soporte a pared"
    },
]

//Buscar elementos en la BD de plantas
export function buscarPlantasname(nombrePlanta){
    var result = plantas.find(item => item.nombre === nombrePlanta);
    return result;
}

//Buscar elementos en la BD de macetas
export function buscarMacetasname(nombreMaceta){
    var result = macetas.find(item => item.nombre === nombreMaceta);
    return result;
}

//Buscar elementos en la BD de loMasPedido
export function buscarloMasPedidoname(nombreProducto){
    var result = loMasPedido.find(item => item.nombre === nombreProducto);
    return result;
}

//Buscar elementos en la BD de herramientas
export function buscarHerramientasname(nombreHerramienta){
    var result = herramientas.find(item => item.nombre === nombreHerramienta);
    return result;
}

export {plantas}; 
export {macetas}; 
export {herramientas};
export {loMasPedido};
/*export {carrito};*/
