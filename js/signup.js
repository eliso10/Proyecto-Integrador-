const inputName = document.getElementById('floatingName');
const inputLastName = document.getElementById('floatingLastName');
const inputEmail = document.getElementById('floatingInputEmail');
const inputEmailConfirm = document.getElementById('floatingInputEmailConfirm');
const inputUsername = document.getElementById('floatingUserName');
const inputPhone = document.getElementById('floatingInputCel');
const inputPassword = document.getElementById('floatingPassword');
const inputPasswordConfirm = document.getElementById('floatingPasswordConfirm');

const form = document.getElementById('signUp');

//regex
const regexName = /^[a-zA-Z].*[\s\.]*$/;
const regexLastName = /^[a-zA-Z].*[\s\.]*$/;
const regexUsername = /^[a-zA-z0-9]{4,}$/;
const regexEmail = /^.+@[^@]+\.[^@]{2,}$/;
const regexPhone = /^\d{10}$/;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

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
    if(regexName.test(inputName.value) && regexLastName.test(inputLastName.value) && regexUsername.test(inputUsername.value) && regexEmail.test(inputEmail.value) && (inputEmail.value == inputEmailConfirm.value) && regexPhone.test(inputPhone.value) && regexPassword.test(inputPassword.value) && (inputPassword.value == inputPasswordConfirm.value)){
      //data en JSON object si es coorecta la informacion
      const data = new FormData(event.target);
      const allData = Object.fromEntries(data.entries());
  
      //se muestra en consola el objeto json
      console.log(JSON.stringify(allData));
  
      //Enviar a la pagina de inicio si se inicia sesion exitosamente
      appendAlert('¡Gracias! Hemos enviado un correo electrónico para que puedas verificar tu cuenta', 'success');
    } else{
      appendAlert('Verifica la información', 'danger'); 
    }
  })