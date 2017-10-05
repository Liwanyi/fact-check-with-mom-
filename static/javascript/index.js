const login = document.querySelector("#login");
const logout = document.querySelector("#logout");
const useranme = document.querySelector("#username");
const password = document.querySelector("#password");

const form = document.querySelector("#form");
const text = document.querySelector("#text");

login.addEventListener("click", e => {
    e.preventDefault();
    usernameText = username.value.toLowerCase();
    passwordText = password.value.toLowerCase();
    if(usernameText === "liwanyi" && passwordText === "liwanyi"){
        form.classList.toggle("show");
        text.classList.toggle("show");
    } else {
        alert("Invalid username or password. Please try again");
        form.reset();
    }
})

logout.addEventListener("click", e => {
    form.classList.toggle("show");
    text.classList.toggle("show");
})