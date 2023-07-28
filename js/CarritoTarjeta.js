const mainContainerTarjetas = document.getElementById('elementosCarritos');

var carrito =[
    {
        id: 1,
        nombre: "Fertilizante Nitrofosca 1kg",
        url: "https://elheraldodemartinez.com.mx/images/Articulos2018/Articulo/2020/011Noviembre/28Nov/PAG-3-PRINCIPAL.png",
        precio: 250.00,
        descripcion: "Este fertilizante ayudara a que tu planta crezca y tenga brotes nuevos",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Fertilizante Florifil 1kg",
        url: "https://agropos.com.br/wp-content/uploads/2022/03/Fertilizante-Para-Planta.jpg",
        precio: 250.00,
        descripcion: "Este fertilizante ayudara a que tus plantas que dan flores tengan aun mas Este fertilizante ayudara a que tu planta crezca y tenga brotes nuevos",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Sistema de Reigo",
        url: "https://m.media-amazon.com/images/I/812q2D0i3sL._AC_UF1000,1000_QL80_.jpg",
        precio: 950.00,
        descripcion: "Es un sistema que te permitira regar de manera facil y sencilla hasta 30m de distancia",
        cantidad: 1,
    },
]
//Función principal para la creación y renderización del carrito. 
const RenderCarrito = () => {

carrito.forEach(compra => {
    
var mainContainer = document.createElement('DIV');
mainContainer.setAttribute('class', 'row p-2 bg border rounded itemComp align-items-center');

var imagenContainer = document.createElement('DIV');
imagenContainer.setAttribute('class', 'col-md-3 mt-1');
mainContainer.appendChild(imagenContainer);

var imagenProduct = document.createElement('IMG');
imagenProduct.setAttribute('class', 'img-fluid img-responsive rounded product-image');
imagenProduct.setAttribute('src', compra.url);
imagenContainer.appendChild(imagenProduct);

var dataContainer = document.createElement('DIV');
dataContainer.setAttribute('class', 'col-md-6 mt-1 row informacion');
mainContainer.appendChild(dataContainer);

var titulo = document.createElement('H5');
titulo.setAttribute('class', 'd-flex justify-content-start NombreTarjeta');
dataContainer.appendChild(titulo);
titulo.textContent = compra.nombre;



// var node_7 = document.createElement('DIV');
// node_7.setAttribute('class', ' d-flex justify-content-start mt-1 mb-1 spec-1');
// dataContainer.appendChild(node_7);

// var node_8 = document.createElement('SPAN');
// node_7.appendChild(node_8);

// var node_9 = document.createTextNode((new String("Diseño Unico")));
// node_8.appendChild(node_9);

// var punto1 = document.createElement('SPAN');
// punto1.setAttribute('class', 'dot');
// node_7.appendChild(punto1);

// var node_11 = document.createElement('SPAN');
// node_7.appendChild(node_11);

// var node_12 = document.createTextNode((new String("Casa")));
// node_11.appendChild(node_12);

// var punto2 = document.createElement('SPAN');
// punto2.setAttribute('class', 'dot');
// node_7.appendChild(punto2);

// var node_14 = document.createElement('SPAN');
// node_7.appendChild(node_14);

// var node_15 = document.createTextNode((new String("Oficina")));
// node_14.appendChild(node_15);




var descripcionGeneral = document.createElement('P');
descripcionGeneral.setAttribute('class', 'justify-content-start text-justify para mb-0');
descripcionGeneral.textContent = compra.descripcion;
dataContainer.appendChild(descripcionGeneral);

// var divisionContainer = document.createElement('DIV');
// divisionContainer.setAttribute('class', 'd-flex justify-content-end col-md-1');
// divisionContainer.setAttribute('style', 'height: 200px; width: 25px;');
// mainContainer.appendChild(divisionContainer);

// var barraDivisora = document.createElement('DIV');
// barraDivisora.setAttribute('class', 'vr');
// barraDivisora.setAttribute('style', 'width: .3rem;');
// divisionContainer.appendChild(barraDivisora);

var containerDerecho = document.createElement('DIV');
containerDerecho.setAttribute('class', 'align-items-center align-content-center col-md-3 border-left mt-1 row');
mainContainer.appendChild(containerDerecho);

var containerMoney = document.createElement('DIV');
containerMoney.setAttribute('class', 'd-flex flex-row justify-content-center');
containerDerecho.appendChild(containerMoney);

var precio = document.createElement('H1');
precio.setAttribute('class', 'mr-1');
precio.textContent = "$"+compra.precio
containerMoney.appendChild(precio);


var envioH6 = document.createElement('H6');
envioH6.setAttribute('class', 'text-success');
envioH6.textContent = "costo de envió adicional."
containerDerecho.appendChild(envioH6);


var buttonsContainer = document.createElement('DIV');
buttonsContainer.setAttribute('class', 'd-flex flex-column mt-4');
containerDerecho.appendChild(buttonsContainer);

var buttonBorrar = document.createElement('BUTTON');
buttonBorrar.setAttribute('class', 'btn btn-primary btn-sm');
buttonBorrar.setAttribute('type', 'button');
buttonBorrar.textContent = "Eliminar del Carrito"
buttonsContainer.appendChild(buttonBorrar);


var buttonsContainer2 = document.createElement('DIV');
buttonsContainer2.setAttribute('class', 'row justify-content-around');
buttonsContainer.appendChild(buttonsContainer2);

var buttonAñadir = document.createElement('BUTTON');
buttonAñadir.setAttribute('class', 'btn  btn-primary btn-sm col-5 mt-2');
buttonAñadir.setAttribute('type', 'button');
buttonAñadir.textContent = "Añadir";
buttonsContainer2.appendChild(buttonAñadir);

var buttonRestar = document.createElement('BUTTON');
buttonRestar.setAttribute('class', 'btn  btn-primary btn-sm col-5 mt-2');
buttonRestar.setAttribute('type', 'button');
buttonRestar.textContent = "Restar",
buttonsContainer2.appendChild(buttonRestar);


mainContainerTarjetas.appendChild(mainContainer);
});

}


const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);
  
    console.log(foundId);
  
    carrito = carrito.filter((carritoId) => {
      return carritoId !== foundId;
    });
  
  };


//   restar.addEventListener("click", () => {
//     if (product.cantidad !== 1) {
//       product.cantidad--;
//     }
//   });


//   let sumar = carritoContent.querySelector(".sumar");
//   sumar.addEventListener("click", () => {
//     product.cantidad++;
//   });

  RenderCarrito();