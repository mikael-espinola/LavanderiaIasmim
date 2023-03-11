const envio = document.querySelector('#enter');
const login = document.querySelector('#login');


function clickLogin() {
    alert("Usuário Inválido. \nPor favor, tente novamente mais tarde.")
}

function clickEnvio() {
    alert("Envio concluído!  😁")
}

envio.addEventListener("click", () => {
    clickEnvio();
})