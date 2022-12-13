import { Calculo } from '../entities/Calculo.js'

export class CalculoService extends Calculo {

	add(vazao, diametro, segmentoA, segmentoB, segmentoC, segmentoD) {
		new Calculo(vazao, diametro, segmentoA, segmentoB, segmentoC, segmentoD);
	}
	

	somaComprimento() {
		return this.segmentoA + this.segmentoB + this.segmentoC + this.segmentoD;
	}

	somaAcessorios() {
		
	}

	velocidadeMedia() {
		const area = Math.pi * Math.pow(this.diametro,2) / 4; 
		return this.vazao / area;
	}
	
	reynolds( massaEspecifica, velocidadeMedia, diametro, mi) {
		return (this.massaEspecificaAgua * this.velocidadeMedia() * this.diametro) / this.mi;
	}

	// calculoEscoamento( ) {
		
	// }

	

	rugosidadeRelativa() {
		
	}
 

	fatorDeAtrito( rugosidadeRelativa, reynolds ) {
		return Math.pow((-1.8 * Math.log(10) * ( Math.pow(this.rugosidadeRelativa() / 3.7,1.11) + (6.9 / this.reynolds()))),-2); 
	}
	
	perdaDeCargaTotal( perdaInicial, perdaFinal ) {
		return this.fatorDeAtrito * (this.somaComprimento() + this.somaAcessorios() / D) * (Math.pow(this.vazao,2) / 2 * this.gravidade );
	}

	
}



