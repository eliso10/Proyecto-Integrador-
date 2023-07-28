const inputEmail = document.getElementById('floatingInputEmail');
const inputPassword = document.getElementById('floatingPassword');

const form = document.getElementById('logIn');
//regex
const regexEmail = /^.+@[^@]+\.[^@]{2,}$/;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//^[A-Za-z0-9._+-]+@gmail\\.com$

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
  if(regexPassword.test(inputPassword.value) && regexEmail.test(inputEmail.value)){
    //data en JSON object si es coorecta la informacion
    const data = new FormData(event.target);
    const allData = Object.fromEntries(data.entries());

    //se muestra en consola el objeto json
    console.log(JSON.stringify(allData));

    localStorage.setItem('UserStatus', "true");
    //Enviar a la pagina de inicio si se inicia sesion exitosamente
      window.location.href = '../index.html';

  } else if(!regexPassword.test(inputPassword.value) && !regexEmail.test(inputEmail.value)){
    
    appendAlert('Verifica la información de ambos campos', 'danger');
  } else if (!regexEmail.test(inputEmail.value)){
    appendAlert('Verifica el correo electrónico', 'danger');
  } else{
    appendAlert('Verifica la contraseña. Recuerda que son mínimo 8 caracteres: al menos un número, un símbolo, una mayúscula y una minúscula', 'danger'); 
  }
})
