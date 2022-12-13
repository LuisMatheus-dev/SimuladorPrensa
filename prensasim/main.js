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

const slideValueVazao = document.querySelector("#sliderVazao");
const inputSliderVazao = document.querySelector("#vazao");

const slideValueDiametro = document.querySelector("#sliderDiametro");
const inputSliderDiametro = document.querySelector("#diametro");

function toggleItens(listOfObjects) {
	[...listOfObjects].forEach(objectDOM => objectDOM.classList.toggle("hidden"));
}

//btnVoltarAoMenu.addEventListener("click", () => toggleItens([prensaControls, prensaImage, escolhaContainer, btnVoltarAoMenu]))
//btnPrensa.addEventListener("click", () => toggleItens([prensaControls, prensaImage, escolhaContainer, btnVoltarAoMenu]));

inputSliderVazao.oninput = (() => {
	let value = inputSliderVazao.value;
	slideValueVazao.textContent = value + "m³/s";
});

inputSliderDiametro.oninput = (() => {
	let value = inputSliderDiametro.value;
	slideValueDiametro.textContent = value + "mm";
});

const controller = new BombaController(new CalculoService(), new BombaView() );


//-----------------------------------------------













