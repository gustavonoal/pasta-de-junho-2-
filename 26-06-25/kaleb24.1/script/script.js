const preview = document.getElementById("previewBox");
const output = document.getElementById("cssOutput");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const direction = document.getElementById("direction");

function atualizarGradiante() {
    const dir = direction.value;
     const c1 = color1.value;
     const c2 = color2.value;
     const gradiante = `linear-gradient(${dir}, ${c1}, ${c2})`;
     preview.style.background = gradiante;
     output.textContent = `background: ${gradiante};`;
}
color1.addEventListener("input", atualizarGradiante);
color2.addEventListener("input", atualizarGradiante);
direction.addEventListener("input", atualizarGradiante);
atualizarGradiante();