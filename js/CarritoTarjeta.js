
var carrito =[
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
]
carrito.forEach(compra => {

var node_1 = document.createElement('DIV');
node_1.setAttribute('class', 'row rowProduct');

var node_2 = document.createElement('DIV');
node_2.setAttribute('class', 'col-1 item');
node_1.appendChild(node_2);

var node_3 = document.createElement('P');
node_3.setAttribute('class', 'id');
node_2.appendChild(node_3);
node_3.textContent = compra.id;

var node_4 = document.createTextNode((new String("\\n #1\\n ")));
node_3.appendChild(node_4);

var node_5 = document.createElement('DIV');
node_5.setAttribute('class', 'col-4');
node_1.appendChild(node_5);

var node_6 = document.createElement('IMG');
node_6.setAttribute('src', compra.url);
node_6.setAttribute('class', 'img-thumbnail');
node_6.setAttribute('alt', 'imagen de producto');
node_5.appendChild(node_6);

var node_7 = document.createElement('DIV');
node_7.setAttribute('class', 'col-3');
node_1.appendChild(node_7);

var node_8 = document.createElement('P');
node_8.setAttribute('class', 'descripcion');
node_7.appendChild(node_8);
node_8.textContent = compra.nombre; 

var node_9 = document.createTextNode((new String("\\nnombre del producto\\n ")));
node_8.appendChild(node_9);

var node_10 = document.createElement('DIV');
node_10.setAttribute('class', 'col-2');
node_1.appendChild(node_10);

var node_11 = document.createElement('P');
node_11.setAttribute('class', 'cantidad');
node_10.appendChild(node_11);
node_11.textContent = " ";

var node_12 = document.createTextNode((new String("\\n1\\n ")));
node_11.appendChild(node_12);

var node_13 = document.createElement('DIV');
node_13.setAttribute('class', 'col-2');
node_1.appendChild(node_13);

var node_14 = document.createElement('P');
node_14.setAttribute('class', 'precio final');
node_13.appendChild(node_14);
node_14.textContent = compra.precio;

});