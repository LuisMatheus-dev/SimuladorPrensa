export class Calculo {

	//Constantes
	temperatura = 25; 
	massaEspecificaAgua = 997;
	mi = 0.89*10^3;
	gravidade = 9.81;
	
	constructor(
		vazao,
		diametro,
		segmentoA,
		segmentoB,
		segmentoC,
		segmentoD

	) {
		this._vazao = vazao
		this._diametro = diametro
		this._segmentoA = segmentoA
		this._segmentoB = segmentoB
		this._segmentoC = segmentoC
		this._segmentoD = segmentoD 
	}

	get vazao() { return this._vazao }
	get diametro() { return this._diametro }
	get segmentoA() { return this._segmentoA }
	get segmentoB() { return this._segmentoB }
	get segmentoC() { return this._segmentoC }
	get segmentoD() { return this._segmentoD }
	

}

