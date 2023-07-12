const inputEmail = document.getElementById('floatingInputEmail');

const form = document.getElementById('logIn');
//regex
const regexEmail = /^.+@[^@]+\.[^@]{2,}$/;

    //poblar alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
const wrapper = document.createElement('div')
wrapper.innerHTML = [
  `<div class="alert alert-${type} alert-dismissible" role="alert">`,
  `   <div>${message}</div>`,
  '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
  '</div>'
].join('')

alertPlaceholder.append(wrapper)
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

    //Enviar a la pagina de inicio si se inicia sesion exitosamente
      //window.location.href = '../index.html';
  } else{
    appendAlert('Coloca un correo electrónico válido', 'danger'); 
  }
})
