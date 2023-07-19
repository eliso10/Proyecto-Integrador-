const inputEmail = document.getElementById('floatingInputEmail');

const form = document.getElementById('logIn');

//modal
// const modal = document.getElementById('modalConfirmacion');
// const myInput = document.getElementById('myInput');

//regex
const regexEmail = /^.+@[^@]+\.[^@]{2,}$/;

    //poblar alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
alertPlaceholder.innerHTML = [
  `<div class="alert alert-${type} alert-dismissible" role="alert">`,
  `   <div>${message}</div>`,
  '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
  '</div>'
].join('')

alertPlaceholder.append()
}

//revision de los campos con el regex
form.addEventListener('submit',(event)=>{
  event.preventDefault();
  if(regexEmail.test(inputEmail.value)){
    //data en JSON object si es coorecta la informacion
    const data = new FormData(event.target);
    const allData = Object.fromEntries(data.entries());

    //se muestra en consola el objeto json
    console.log(JSON.stringify(allData));

    //Alerta de correo enviado exitosamente
    appendAlert('Se ha enviado el correo, recuerda revisar tu bandeja de correo no deseado en caso de no verlo en la principal', 'success');
  } else{
    appendAlert('Coloca un correo electrónico válido', 'danger'); 
  }
})
