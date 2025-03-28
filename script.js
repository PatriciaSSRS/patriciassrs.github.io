function atualizarSaudacao() {
    let agora = new Date();
    let hora = agora.getHours();
    let saudacao = "";

    if (hora < 12) {
        saudacao = "Bom dia!";
    } else if (hora < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }

    document.getElementById("saudacao").innerText = saudacao + " Seja bem-vindo ao MiniMercado!";
}

document.addEventListener("DOMContentLoaded", atualizarSaudacao);
