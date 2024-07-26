


const form = document.getElementById("login");

const validate = localStorage.getItem ('myForms');

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(validate) {
        const inputFields = JSON.parse(validate)
        if(form.email.value == inputFields.email && form.password.value == inputFields.password) {

            alert("welcome login successful.");
            location.href = "../../landing.html"
            const newText = {
                email: inputFields.email,
                password: inputFields.password
            }

            sessionStorage.setItem("logins", JSON.stringify(newText))

        }  else {
            alert("you are wrong,try again")
        }
    }
})