const mainContainer = document.getElementById('elementosCarritos');

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
    node_1.setAttribute('class', 'row p-2 bg-white border rounded');
    node_1.setAttribute('id', 'itemComp');
    
    var node_2 = document.createElement('DIV');
    node_2.setAttribute('class', 'col-md-3 mt-1');
    node_1.appendChild(node_2);
    
    var node_3 = document.createElement('IMG');
    node_3.setAttribute('class', 'img-fluid img-responsive rounded product-image');
    node_3.setAttribute('src', 'https://como-plantar.com/wp-content/uploads/2021/09/cultivar-y-cuidar-cactus-oreja-de-conejo.jpg.webp');
    node_2.appendChild(node_3);
    
    var node_4 = document.createElement('DIV');
    node_4.setAttribute('class', 'col-md-6 mt-1');
    node_1.appendChild(node_4);
    
    var node_5 = document.createElement('H5');
    node_4.appendChild(node_5);
    
    var node_6 = document.createTextNode((new String("Cactus mini")));
    node_5.appendChild(node_6);
    
    var node_7 = document.createElement('DIV');
    node_7.setAttribute('class', 'd-flex flex-row');
    node_4.appendChild(node_7);
    
    var node_8 = document.createElement('DIV');
    node_8.setAttribute('class', 'ratings mr-2');
    node_7.appendChild(node_8);
    
    var node_9 = document.createElement('I');
    node_9.setAttribute('class', 'fa fa-star');
    node_8.appendChild(node_9);
    
    var node_10 = document.createElement('I');
    node_10.setAttribute('class', 'fa fa-star');
    node_8.appendChild(node_10);
    
    var node_11 = document.createElement('I');
    node_11.setAttribute('class', 'fa fa-star');
    node_8.appendChild(node_11);
    
    var node_12 = document.createElement('I');
    node_12.setAttribute('class', 'fa fa-star');
    node_8.appendChild(node_12);
    
    var node_13 = document.createElement('SPAN');
    node_7.appendChild(node_13);
    
    var node_14 = document.createTextNode((new String("310")));
    node_13.appendChild(node_14);
    
    var node_15 = document.createElement('DIV');
    node_15.setAttribute('class', 'mt-1 mb-1 spec-1');
    node_4.appendChild(node_15);
    
    var node_16 = document.createElement('SPAN');
    node_15.appendChild(node_16);
    
    var node_17 = document.createTextNode((new String("Interios/Exterior")));
    node_16.appendChild(node_17);
    
    var node_18 = document.createElement('SPAN');
    node_18.setAttribute('class', 'dot');
    node_15.appendChild(node_18);
    
    var node_19 = document.createElement('SPAN');
    node_15.appendChild(node_19);
    
    var node_20 = document.createTextNode((new String("Pequeña")));
    node_19.appendChild(node_20);
    
    var node_21 = document.createElement('SPAN');
    node_21.setAttribute('class', 'dot');
    node_15.appendChild(node_21);
    
    var node_22 = document.createElement('SPAN');
    node_15.appendChild(node_22);
    
    var node_23 = document.createTextNode((new String("Elegante")));
    node_22.appendChild(node_23);
    
    var node_24 = document.createElement('BR');
    node_22.appendChild(node_24);
    
    var node_25 = document.createElement('DIV');
    node_25.setAttribute('class', 'mt-1 mb-1 spec-1');
    node_4.appendChild(node_25);
    
    var node_26 = document.createElement('SPAN');
    node_25.appendChild(node_26);
    
    var node_27 = document.createTextNode((new String("Diseño Unico")));
    node_26.appendChild(node_27);
    
    var node_28 = document.createElement('SPAN');
    node_28.setAttribute('class', 'dot');
    node_25.appendChild(node_28);
    
    var node_29 = document.createElement('SPAN');
    node_25.appendChild(node_29);
    
    var node_30 = document.createTextNode((new String("Casa")));
    node_29.appendChild(node_30);
    
    var node_31 = document.createElement('SPAN');
    node_31.setAttribute('class', 'dot');
    node_25.appendChild(node_31);
    
    var node_32 = document.createElement('SPAN');
    node_25.appendChild(node_32);
    
    var node_33 = document.createTextNode((new String("Oficina")));
    node_32.appendChild(node_33);
    
    var node_34 = document.createElement('BR');
    node_32.appendChild(node_34);
    
    var node_35 = document.createElement('P');
    node_35.setAttribute('class', 'text-justify text-truncate para mb-0');
    node_4.appendChild(node_35);
    
    var node_36 = document.createElement('BR');
    node_35.appendChild(node_36);
    
    var node_37 = document.createElement('BR');
    node_35.appendChild(node_37);
    
    var node_38 = document.createElement('DIV');
    node_38.setAttribute('class', 'align-items-center align-content-center col-md-3 border-left mt-1');
    node_1.appendChild(node_38);
    
    var node_39 = document.createElement('DIV');
    node_39.setAttribute('class', 'd-flex flex-row align-items-center');
    node_38.appendChild(node_39);
    
    var node_40 = document.createElement('H4');
    node_40.setAttribute('class', 'mr-1');
    node_39.appendChild(node_40);
    
    var node_41 = document.createTextNode((new String("$13.99")));
    node_40.appendChild(node_41);
    
    var node_42 = document.createElement('SPAN');
    node_42.setAttribute('class', 'strike-text');
    node_39.appendChild(node_42);
    
    var node_43 = document.createTextNode((new String("$20.99")));
    node_42.appendChild(node_43);
    
    var node_44 = document.createElement('H6');
    node_44.setAttribute('class', 'text-success');
    node_38.appendChild(node_44);
    
    var node_45 = document.createTextNode((new String("Free shipping")));
    node_44.appendChild(node_45);
    
    var node_46 = document.createElement('DIV');
    node_46.setAttribute('class', 'd-flex flex-column mt-4');
    node_38.appendChild(node_46);
    
    var node_47 = document.createElement('BUTTON');
    node_47.setAttribute('class', 'btn btn-primary btn-sm');
    node_47.setAttribute('type', 'button');
    node_46.appendChild(node_47);
    
    var node_48 = document.createTextNode((new String("Borrar")));
    node_47.appendChild(node_48);
    
    var node_49 = document.createElement('BUTTON');
    node_49.setAttribute('class', 'btn btn-outline-primary btn-sm mt-2');
    node_49.setAttribute('type', 'button');
    node_46.appendChild(node_49);
    
    var node_50 = document.createTextNode((new String("Añadir Detalle")));
    node_49.appendChild(node_50);

    mainContainer.appendChild(node_1);
});