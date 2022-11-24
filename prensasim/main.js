import { Fluidos } from './models/Fluidos.js';


const escolhaContainer = document.querySelector("#escolha"); 
const btnBomba = document.querySelector(".btn-bomba");
const btnPrensa = document.querySelector(".btn-prensa");
const btnVoltarAoMenu = document.querySelector(".voltar");


//Prensa
const prensaControls = document.querySelector("#prensa-controls");
const prensaImage = document.querySelector(".prensa");
const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");

function toggleItens(listOfObjects) {
  [...listOfObjects].forEach(objectDOM => objectDOM.classList.toggle("hidden"));
}

btnVoltarAoMenu.addEventListener("click", () => toggleItens([ prensaControls, prensaImage, escolhaContainer, btnVoltarAoMenu]))
btnPrensa.addEventListener("click", () => toggleItens([ prensaControls, prensaImage, escolhaContainer, btnVoltarAoMenu ]));

inputSlider.oninput = (() => {
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value / 2) + "%";
  slideValue.classList.add("show");
});
inputSlider.onblur = (() => {
  slideValue.classList.remove("show");
});

//const forca = parseInt(prompt("Digite a força que será aplicada a viga (N)"));


