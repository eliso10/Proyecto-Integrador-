//js para crear formato de contacto 
document.getElementById("buttonModal").addEventListener("click", Captacion)
function Captacion() {
    let nombre = document.getElementById("floatingInputUsername");
    let correo = document.getElementById("floatingInputEmail");
    let Mensaje = document.getElementById("floatingInputComentarios");
    if (floatingInputUsername ==" ") {
        alert("El nombre es necesario digitar")
        document.getElementById("floatingInputUsername").focus();
    } else if (floatingInputEmail ==" ") {
        alert("Es necesario digitar el correo")
        document.getElementById("floatingInputEmail").focus();
    } else {
        if (floatingInputComentarios ==" ") {
            alert("El nombre es necesario digitar")
            document.getElementById("floatingInputComentarios").focus();
        }
    }

    console.log(nombre.value);
    console.log(correo.value);
    console.log(Mensaje.value);
}