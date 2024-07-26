const form = document.getElementById("register");
let arr = []

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let formEntry ={
        surname: form.surname.value,
        othername: form.othername.value,
        dob: form.dob.value,
        homeaddress: form.homeaddress.value,
        stateoforigin: form.stateoforigin.value,
        country: form.country.value,
        email: form.email.value,
        password: form.password.value,
        comfirmpassword: form.comfirmpassword.value,
    }

    let game = arr.push(formEntry);
    console.log(arr);

    localStorage.setItem("myForms", JSON.stringify(formEntry))
    location.href = "login.html"
})

































// const something = {
//     name: "Game",
//     gender: "male"
// // }
// const something = {
//     name: "Game",
//     gender: "male"
// }

// localStorage.setItem("entries", JSON.stringify(something))

// const form = document.getElementById("register");

// let inputFields = JSON.parse(localStorage.getItem("entries"))

// let arr = [];

// console.log(inputFields)

// form.addEventListener("SUBMIT",(e) => {
//     const text = {
//         surname: form.surname.value,
//         othername: form.othername.value,
//         dateofbirth: form.dateofbirth.value,
//         state: form.state.value,
//         country: form.country.value
//     }
//     let game = arr.push(text)

//     console.log(arr)

//     localStorage.setItem("entries",JSON.stringify(arr));

//     if(game) {
//         alert("Registration Successful")
//         form.reset(1);

//         location.href = "http://127.0.0.1:5500/landing.html"
//     } else {
//         alert("Registration failed")
//     }

//     console.log(text)
// })