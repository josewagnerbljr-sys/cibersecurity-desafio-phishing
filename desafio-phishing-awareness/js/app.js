const form = document.getElementById("login-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // O exercício é uma simulação local.
    // Nenhum valor do formulário é enviado ou persistido.
    result.textContent =
        "SIMULAÇÃO CONCLUÍDA: este laboratório não envia nem armazena a senha informada. " +
        "Em um ataque real, uma página falsa poderia tentar encaminhar a credencial para um terceiro. " +
        "Use somente dados fictícios neste ambiente.";

    result.classList.add("visible");

    form.reset();
});
