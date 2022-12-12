export class BombaView {
	constructor() {

		this._vazao = document.querySelector(".sliderValue");
		this._diametro = document.querySelector("#diametro")
		this._segmentoA = document.querySelector("#segmento-a")
		this._segmentoB = document.querySelector("#segmento-b")
		this._segmentoC = document.querySelector("#segmento-c")
		this._segmentoD = document.querySelector("#segmento-d")
		this.calcular = document.querySelector(".btn-calcular-bomba")
	}

	
	get vazao() { return this._vazao.valueAsNumber }
	
	get diametro() { return this._diametro.valueAsNumber }

	get segmentoA() { return this._segmentoA.valueAsNumber }
	
	get segmentoB() { return this._segmentoB.valueAsNumber }
	
	get segmentoC() { return this._segmentoC.valueAsNumber }
	
	get segmentoD() { return this._segmentoD.valueAsNumber }
	

	get _inputs() {
		return [ this.vazao, this.diametro, this.segmentoA, this.segmentoB, this.segmentoC, this.segmentoD ];
	}

	delegarCalcular( manipulador ) {
		
		this.calcular.addEventListener('click', () => {
			return manipulador(this._inputs);
		})
	}
} 


