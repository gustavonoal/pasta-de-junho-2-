const inputCor = document.getElementById("inputCor");
const aplicarBtn = document.getElementById("aplicarBtn");
const mensagem = document.getElementById("mensagem");
const toggleTheme = document.getElementById("toggleTheme");

const coresValidas = [
    "Vermelho",
    "Azul",
    "Verde",
    "Amarelo",
    "Preto",
    "Branco",
    "Rosa",
    "Laranja",
    "Roxo",
    "Cinza",
    "Marrom",
    "Ciano",
    "Dourado",
    "Prata"
];
const coresMapeadas = {
    Vermelho: "red",
    Azul: "blue",
    Verde: "green",
    Amarelo: "yellow",
    Preto: "black",
    Branco: "white",
    Rosa: "pink",
    Laranja: "orange",
    Roxo: "purple",
    Cinza: "gray",
    Marrom: "brown",
    Ciano: "cyan",
    Dourado: "gold",
    Prata: "silver"
};
aplicarBtn.addEventListener("click", () => {
    const cor = inputCor.value.toLowerCase().trim();

    if (coresValidas.includes(cor)) {
        const corCSS = coresMapeadas[cor];
        document.body.style.backgroundColor = corCSS;
        mensagem.textContent = `Cor aplicada: ${cor}`;
        mensagem.style.color = cor === "preto" ? "#fff" : "#000";
    } else {
        mensagem.textContent= "Tente outra cor";
        mensagem.style.color = "red";
    }
});
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    
    if (document.body.classList.contains("dark")) {
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "";
    }
});