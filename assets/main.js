const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;

    if (usernameValue === "") {
        setErrorFor(username, "Campo Obrigatório.");
    }else{
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "Campo Obrigatório.");
    }else{
        setSuccessFor(email);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
        });

    if (formIsValid){
        const sucesso = document.getElementById("sucesso")
        sucesso.innerHTML = "Sucesso, boa viagem!"
    }else{
        const erro = document.getElementById("erro")
        erro.innerHTML = "Campos Obrigatórios não registrados!"
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}