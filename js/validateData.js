(() => {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation');

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