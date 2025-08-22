const container = document.getElementById("container");
const flexDirection = document.getElementById("flexDirection");
const justifyContent = document.getElementById("justifyContent");
const alingItems = document.getElementById("alingItems");
function updateFlex() {
    container.style.flexDirection = flexDirection.value;
    container.style.justifyContent = justifyContent.value;
    container.style.alingItems = alingItems.value;
}
flexDirection.addEventListener("change", updateFlex);
justifyContent.addEventListener("change", updateFlex);
alingItems.addEventListener("change", updateFlex);
updateFlex();