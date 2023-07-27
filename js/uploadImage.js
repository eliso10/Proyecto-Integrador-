const defaultImage = "../src/default-image-create-form.png";

const file = document.getElementById("imageForm");
const img = document.getElementById("articleImage");

file.addEventListener('change', e => {
    if(e.target.files[0]){
        const reader = new FileReader();
        reader.onload = function(e){
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    } else{
        img.src = defaultImage
    }
})