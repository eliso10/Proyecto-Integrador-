const form = document.getElementById("productForm");

const extractData = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    const allData = Object.fromEntries(data.entries());

    console.log(JSON.stringify(allData));
}

form.addEventListener("submit",extractData);