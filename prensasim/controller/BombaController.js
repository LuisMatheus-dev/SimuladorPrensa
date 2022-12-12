export class BombaController {

	constructor(model, view) {
		this.model = model;
		this.view = view;

		this.view.delegarCalcular( this.calcular ); 
	}

	calcular = variaveis => {
		
		const [
			vazao,
			diametro,
			segmentoA,
			segmentoB,
			segmentoC,
			segmentoD
		] = variaveis;  

		this.model.add(	vazao, diametro, segmentoA, segmentoB, segmentoC, segmentoD );		
	}

    

	
}