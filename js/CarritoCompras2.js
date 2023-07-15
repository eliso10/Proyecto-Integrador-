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
        descripcion: "Este fertilizante ayudara a que tus plantas que dan flores tengan aun mas",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Sistema de Riego",
        url: "https://m.media-amazon.com/images/I/812q2D0i3sL._AC_UF1000,1000_QL80_.jpg",
        precio: 950.00,
        descripcion: "Es un sistema que te permitira regar de manera facil y sencilla hasta 30m de distancia, Es un sistema que te permitira regar de manera facil y sencilla hasta 30m de distancia",
        cantidad: 1,
    },
]



function  eliminarCarrito(indice){
    carrito = carrito.filter(object => {
        return object.id !== indice;
      });

}


mainContainerTarjetas.addEventListener('click', e => {
    if(e.target.classList.contains('btn-Eliminar') ){
        const productoTarjeta = e.target.parentElement.parentElement.parentElement.parentElement;
        console.log(productoTarjeta);
        console.log(productoTarjeta.querySelector('.NombreTarjeta').textContent);

        //En caso de ser necesario creó un onjeto de java desde el arreglo directo
        const infoProduct = buscarCarritoNombre(productoTarjeta.querySelector('.NombreTarjeta').textContent)

        const infoProduct2 = {
            nombre: productoTarjeta.querySelector('.NombreTarjeta').textContent,
            cantidad : 1,
            precio: productoTarjeta.querySelector('.precioProducto').textContent

        }

        eliminarCarrito(infoProduct.id);
        console.log(carrito);
        RenderCarrito();
    }
});



mainContainerTarjetas.addEventListener('click', e => {
    if(e.target.classList.contains('btn-Restar') ){
        
        const productoTarjeta = e.target.parentElement.parentElement.parentElement.parentElement;
        console.log(productoTarjeta);
        console.log(productoTarjeta.querySelector('.NombreTarjeta').textContent);

        //En caso de ser necesario creó un onjeto de java desde el arreglo directo
        const infoProduct = buscarCarritoNombre(productoTarjeta.querySelector('.NombreTarjeta').textContent)

        const infoProduct2 = {
            nombre: productoTarjeta.querySelector('.NombreTarjeta').textContent,
            cantidad : 1,
            precio: productoTarjeta.querySelector('.precioProducto').textContent

        }
        // console.log("Tipo de dato en carrito: "+typeof(carrito[2].nombre)+ " "+carrito[2].nombre);
        // console.log("Tipo de dato de los elementos obtenidos por el query selector: "+typeof(infoProduct2.nombre)+ " " +infoProduct2.nombre);

        const existente = existeCarritoNombre(infoProduct2.nombre);
        //console.log("Impresión si existe el objeto: "+existente);

        if(existente){
            objIndex = carrito.findIndex((obj => obj.id === infoProduct.id));
            //console.log("Impresión del indice en el arreglo: "+objIndex);
            carrito[objIndex].cantidad--;
            if(carrito[objIndex].cantidad<=0){
                eliminarCarrito(infoProduct.id);
            }
        }
       // console.log(infoProduct);
        RenderCarrito();
        
    }
})

mainContainerTarjetas.addEventListener('click', e => {
    if(e.target.classList.contains('btn-Añadir') ){
        
        const productoTarjeta = e.target.parentElement.parentElement.parentElement.parentElement;
        console.log(productoTarjeta);
        console.log(productoTarjeta.querySelector('.NombreTarjeta').textContent);

        //En caso de ser necesario creó un onjeto de java desde el arreglo directo
        const infoProduct = buscarCarritoNombre(productoTarjeta.querySelector('.NombreTarjeta').textContent)

        const infoProduct2 = {
            nombre: productoTarjeta.querySelector('.NombreTarjeta').textContent,
            cantidad : 1,
            precio: productoTarjeta.querySelector('.precioProducto').textContent

        }
        const existente = existeCarritoNombre(infoProduct2.nombre);
        
        if(existente){
            objIndex = carrito.findIndex((obj => obj.id === infoProduct.id));
            console.log("Impresión del indice en el arreglo: "+objIndex);
            carrito[objIndex].cantidad++;
            console.log(carrito);
        }
        console.log(infoProduct);
        RenderCarrito();
        
    }
})

//Función para buscar elementos del carrito
function buscarCarritoNombre(nombreCarrito){
    var result = carrito.find(item => item.nombre === nombreCarrito);
    return result;
}

//Funcion para saber si un elemento existe dentro del objeto de java carrito
function existeCarritoNombre(nombreCarrito){
    const existenciaCarrito = carrito.some(item => item.nombre === nombreCarrito);
    return (existenciaCarrito)? true : false; 
    
}


//Función principal para la creación y renderización del carrito. 
const RenderCarrito = () => {
    mainContainerTarjetas.innerHTML = '';

carrito.forEach(compra => {
  
    const mainContainer = document.createElement('DIV');
    mainContainer.setAttribute('class', 'row p-2 bg border rounded itemComp align-items-center');
    
    const imagenContainer = document.createElement('DIV');
    imagenContainer.setAttribute('class', 'col-md-3 mt-1');
    mainContainer.appendChild(imagenContainer);
    
    const imagenProduct = document.createElement('IMG');
    imagenProduct.setAttribute('class', 'img-fluid img-responsive rounded product-image');
    imagenProduct.setAttribute('src', compra.url);
    imagenContainer.appendChild(imagenProduct);
    
    const dataContainer = document.createElement('DIV');
    dataContainer.setAttribute('class', 'col-md-6 mt-1 row informacion');
    mainContainer.appendChild(dataContainer);
    
    const titulo = document.createElement('H5');
    titulo.setAttribute('class', 'd-flex justify-content-start NombreTarjeta');
    dataContainer.appendChild(titulo);
    titulo.textContent = compra.nombre;
    
    // const node_7 = document.createElement('DIV');
    // node_7.setAttribute('class', ' d-flex justify-content-start mt-1 mb-1 spec-1');
    // dataContainer.appendChild(node_7);
    
    // const node_8 = document.createElement('SPAN');
    // node_7.appendChild(node_8);
    
    // const node_9 = document.createTextNode((new String("Diseño Unico")));
    // node_8.appendChild(node_9);
    
    // const punto1 = document.createElement('SPAN');
    // punto1.setAttribute('class', 'dot');
    // node_7.appendChild(punto1);
    
    // const node_11 = document.createElement('SPAN');
    // node_7.appendChild(node_11);
    
    // const node_12 = document.createTextNode((new String("Casa")));
    // node_11.appendChild(node_12);
    
    // const punto2 = document.createElement('SPAN');
    // punto2.setAttribute('class', 'dot');
    // node_7.appendChild(punto2);
    
    // const node_14 = document.createElement('SPAN');
    // node_7.appendChild(node_14);
    
    // const node_15 = document.createTextNode((new String("Oficina")));
    // node_14.appendChild(node_15);
    
    const descripcionGeneral = document.createElement('P');
    descripcionGeneral.setAttribute('class', 'justify-content-start text-justify para mb-0');
    descripcionGeneral.textContent = compra.descripcion;
    dataContainer.appendChild(descripcionGeneral);
    
    // const divisionContainer = document.createElement('DIV');
    // divisionContainer.setAttribute('class', 'd-flex justify-content-end col-md-1');
    // divisionContainer.setAttribute('style', 'height: 200px; width: 25px;');
    // mainContainer.appendChild(divisionContainer);
    
    // const barraDivisora = document.createElement('DIV');
    // barraDivisora.setAttribute('class', 'vr');
    // barraDivisora.setAttribute('style', 'width: .3rem;');
    // divisionContainer.appendChild(barraDivisora);
    
    const containerDerecho = document.createElement('DIV');
    containerDerecho.setAttribute('class', 'align-items-center align-content-center col-md-3 border-left mt-1 row');
    mainContainer.appendChild(containerDerecho);
    
    const containerMoney = document.createElement('DIV');
    containerMoney.setAttribute('class', 'd-flex flex-row justify-content-center');
    containerDerecho.appendChild(containerMoney);
    
    const precio = document.createElement('H1');
    precio.setAttribute('class', 'mr-1 precioProducto');
    precio.textContent = "$"+compra.precio*compra.cantidad;
    containerMoney.appendChild(precio);
    
    
    const envioH6 = document.createElement('H6');
    envioH6.setAttribute('class', 'text-success');
    envioH6.textContent = "Cantidad: "+compra.cantidad;
    containerDerecho.appendChild(envioH6);
    
    
    const buttonsContainer = document.createElement('DIV');
    buttonsContainer.setAttribute('class', 'd-flex flex-column mt-4');
    containerDerecho.appendChild(buttonsContainer);
    
    const buttonBorrar = document.createElement('BUTTON');
    buttonBorrar.setAttribute('class', 'btn btn-primary btn-sm btn-Eliminar');
    buttonBorrar.setAttribute('type', 'button');
    buttonBorrar.textContent = "Eliminar del Carrito"
    buttonsContainer.appendChild(buttonBorrar);
    
    
    const buttonsContainer2 = document.createElement('DIV');
    buttonsContainer2.setAttribute('class', 'row justify-content-around');
    buttonsContainer.appendChild(buttonsContainer2);
    
    const buttonAñadir = document.createElement('BUTTON');
    buttonAñadir.setAttribute('class', 'btn  btn-primary btn-sm col-5 mt-2 btn-Añadir');
    buttonAñadir.setAttribute('type', 'button');
    buttonAñadir.textContent = "Añadir";
    buttonAñadir.addEventListener = "";
    buttonsContainer2.appendChild(buttonAñadir);
    
    const buttonRestar = document.createElement('BUTTON');
    buttonRestar.setAttribute('class', 'btn  btn-primary btn-sm col-5 mt-2 btn-Restar');
    buttonRestar.setAttribute('type', 'button');
    buttonRestar.textContent = "Restar",
    buttonsContainer2.appendChild(buttonRestar);

    mainContainerTarjetas.appendChild(mainContainer);

    });
}

RenderCarrito();