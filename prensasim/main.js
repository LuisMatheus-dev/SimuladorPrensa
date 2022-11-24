import { Fluidos } from './model/Fluidos.js';


const escolhaContainer = document.querySelector("#escolha"); 
const btnBomba = document.querySelector(".btn-bomba");
const btnPrensa = document.querySelector(".btn-prensa");

//Prensa
const prensaControls = document.querySelector("#prensa-controls");
const prensaImage = document.querySelector(".prensa");
const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");

prensaControls.classList.add(" hidden");
prensaImage.classList.add("hidden");

btnPrensa.addEventListener("click", (e)=> {
  
  prensaControls.classList.toggle("hidden");
  prensaImage.classList.toggle("hidden");

})

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


