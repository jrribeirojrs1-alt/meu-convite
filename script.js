


const festa = {
    data: "17 de outubro de 2026",
    horario: "19:00",
    local: "Em frente à rádio, Rua Constantino Pontual Gomes"
};

const envelopeBotao = document.getElementById("envelopeBotao");
const inicio = document.getElementById("inicio");
const conviteAberto = document.getElementById("conviteAberto");

// Preenche os dados da festa

document.getElementById("data").textContent = festa.data;
document.getElementById("horario").textContent = festa.horario;
document.getElementById("local").textContent = festa.local;

// Abre o envelope uma única vez

let conviteFoiAberto = false;

envelopeBotao.addEventListener("click", () => {
    if (conviteFoiAberto) return;

    conviteFoiAberto = true;

    envelopeBotao.classList.add("aberto");
    envelopeBotao.setAttribute("aria-label", "Convite aberto");

    // Aguarda a animação antes de mostrar o convite

    setTimeout(() => {
        inicio.classList.add("escondido");
        conviteAberto.classList.remove("escondido");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 1150);
});
