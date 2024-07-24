


const form = document.getElementById("login");

let inputFields = JSON.parse(localStorage.getItem("entries"))

let arr = [];

console.log(inputFields)
form.addEventListener("submit",(e) => {
    const text = {
        userame: form.userame.value,
        password: form.password.value,

    }
    let game = arr.push(text)

    console.log(arr)

    localStorage.setItem("entries",JSON.stringify(arr));

    if(game) {
        alert("Successful Welcome")
        form.reset();

        location.href = "http://127.0.0.1:5500/landing.html"
    } else {
        alert("Wrong Password")
    }

    console.log(text)
})