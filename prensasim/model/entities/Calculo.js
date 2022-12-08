export class Calculo {

	//Constantes
	temperatura = 25; 
	massaEspecificaAgua = 997;
	mi = 0.89*10^3;
	gravidade = 9.81
	
	constructor(
		altura,
		areaDoDiametroInternoDoTubo
		comprimentoDoTubo,
		perdaDeCargaAcessorios,
		vazao,
		velocidadeMedia,
		rugosidadeRelativa,
		fatorDeAtrito
		reynolds
	) {
		this.altura = altura, 
		this.areaDoDiametroInternoDoTubo = areaDoDiametroInternoDoTubo
		this.comprimentoDoTubo = comprimentoDoTubo, 
		this.perdaDeCargaAcessorios = perdaDeCargaAcessorios, 
		this.vazao = vazao,
		this.velocidadeMedia = velocidadeMedia, 
		this.rugosidadeRelativa = rugosidadeRelativa, 
		this.fatorDeAtrito = fatorDeAtrito
		this.reynolds = reynolds;
	}

	get altura() { return this.altura }
	get areaDoDiametroInternoDoTubo() { return this.areaDoDiametroInternoDoTubo }
	get comprimentoDoTubo() { return this.comprimentoDoTubo }
	get perdaDeCargaAcessorios() { return this.perdaDeCargaAcessorios }
	get vazao() { return this.vaza }
	get velocidadeMedia() { return this.velocidadeMedia }
	get rugosidadeRelativa() { return this.rugosidadeRelativa }
	get fatorDeAtrito() { return this.fatorDeAtrito }
	get reynolds() { return this.reynolds }
}

