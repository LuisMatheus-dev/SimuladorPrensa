import { BombaController } from './controller/BombaController.js';
import { CalculoService } from './model/service/CalculoService.js';
import { BombaView } from './view/BombaView.js';



const escolhaContainer = document.querySelector("#escolha");
const btnBomba = document.querySelector(".btn-bomba");
const btnPrensa = document.querySelector(".btn-prensa");
const btnVoltarAoMenu = document.querySelector(".voltar");

//Bomba
const inputDiametro = document.querySelector("#diametro");
const inputSegmentoA = document.querySelector(".segmento-a");
const inputSegmentoB = document.querySelector(".segmento-b");
const inputSegmentoC = document.querySelector(".segmento-c");


//Prensa
//const prensaControls = document.querySelector("#prensa-controls");
//const prensaImage = document.querySelector(".prensa");

const slideValue = document.querySelector(".sliderValue");
const inputSlider = document.querySelector("#vazao");

function toggleItens(listOfObjects) {
	[...listOfObjects].forEach(objectDOM => objectDOM.classList.toggle("hidden"));
}

//btnVoltarAoMenu.addEventListener("click", () => toggleItens([prensaControls, prensaImage, escolhaContainer, btnVoltarAoMenu]))
//btnPrensa.addEventListener("click", () => toggleItens([prensaControls, prensaImage, escolhaContainer, btnVoltarAoMenu]));

inputSlider.oninput = (() => {
	let value = inputSlider.value;
	slideValue.textContent = value;
	slideValue.style.left = (value / 2) + "%";
	slideValue.classList.add("show");
});
inputSlider.onblur = (() => {
	slideValue.classList.remove("show");
});

const controller = new BombaController(new CalculoService(), new BombaView() );


//-----------------------------------------------













