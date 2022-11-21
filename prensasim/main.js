import { Fluidos } from './model/Fluidos.js';


const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
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


