let input = document.querySelector("input");
let button = document.querySelector(".btn");
let copy = document.querySelector("#copy");
let alertc = document.querySelector(".alert-container");

button.addEventListener("click",()=> {
    createPassword();
});
copy.addEventListener("click",()=> {
    copyPassword();
    if(input.value) {
        alertc.classList.remove("active");
        setTimeout(()=> {
            alertc.classList.add("active");
        },2000)
    }
});

function createPassword() {
    let chr ="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 14;
    let password = "";
    for(let index = 0; index<passwordLength;index++) {
        let randomNum = Math.floor(Math.random()* chr.length);
        password += chr.substring(randomNum,randomNum+1); 
      }
      input.value = password;
      alertc.innerText = password +"copied";
}
function copyPassword() {
    input.select();
    input.setSelectionRange(0,9999);
    navigator.clipboard.writeText(input.value);
}