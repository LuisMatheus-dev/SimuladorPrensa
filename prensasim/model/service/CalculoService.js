import { Calculo } from '../entities/Calculo.js'

export class CalculoService extends Calculo {



	add(vazao, diametro, segmentoA, segmentoB, segmentoC, segmentoD) {
		new Calculo(vazao, diametro, segmentoA, segmentoB, segmentoC, segmentoD);
	}
	

	// somaComprimento( segmentos ) {
		
	// }

	// somaAcessorios( segmentos ) {
		
	// }

	// calculoEscoamento( ) {
		
	// }

	// velocidadeMedia() {
		
	// }

	// rugosidadeRelativa(massa) {
		
	// }
 
	// reynolds( massaEspecifica, velocidadeMedia, diametro, mi) {
		
	// }

	// haaland( rugosidadeRelativa, reynolds ) {
			
	// }
	
	// perdaDeCargaTotal( perdaInicial, perdaFinal ) {
		
	// }

	
}



