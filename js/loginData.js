// const regexEmail = /^[\w.+\-]+@gmail\.com$/;
// const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


(() => {
    'use strict'
    
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
    let inputEmail = document.getElementById('floatingInputEmail');
    let inputPassword = document.getElementById('floatingPassword');

    // inputEmail.addEventListener('input', input => {
    //     regexEmail.test(input.target.value)
    //     ?   
    // })
    
    
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else{
        
        
        const data = new FormData(event.target);
        const allData = Object.fromEntries(data.entries());

        console.log(JSON.stringify(allData));
        }
        

        form.classList.add('was-validated')
        }, false)
    })
    })()