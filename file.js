const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener('submit' , function(event){
    event.preventDefault()
    console.log(name.value)
    console.log(email.value)
    console.log(password.value)
})