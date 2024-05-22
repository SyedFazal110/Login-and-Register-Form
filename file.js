// const form = document.querySelector("form");
// const name = document.querySelector("#name");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");

// form.addEventListener('submit' , function(event){
//     event.preventDefault()
//     console.log(name.value)
//     console.log(email.value)
//     console.log(password.value)
// })




const form = document.querySelector("form");
const name = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const cnic = document.querySelector("#cnic");
const password = document.querySelector("#password");

// username  min 4 character max 15 character including space 
let nameRegex = /^\s*(?=.{4,15}$)[a-zA-Z\s]+$/;
// age required 18 to 60
let ageRegex = /^(1[8-9]|[2-5][0-9]|60)$/;
// simple email 
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// cnic number start with 4 and total 13 numbers 
let cnicRegex = /^4\d{12}$/;
// password min 8 ,max 11, 1 uppercase letter , 1 special character 
let passwordRegex = /^(?=.*[A-Z])(?=.*[\W_])[A-Za-z\d\W_]{8,11}$/;

form.addEventListener('submit' , (event)=>{
    event.preventDefault()
    console.log(nameRegex.test(name.value))
    console.log(ageRegex.test(age.value))
    console.log(emailRegex.test(email.value))
    console.log(cnicRegex.test(cnic.value))
    console.log(passwordRegex.test(password.value))

    // if(cnicRegex.test(email.value)){
    //     console.log(email.value);
    // }

} )





