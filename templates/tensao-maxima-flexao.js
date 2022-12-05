// Tensão Máxima de Flexão
function maxFlexao(cls) {
    var I, M, flexao, y;
    separator();
    console.log(`Função selecionada: Tensão Máxima de Flexão.`);
    M = Number.parseFloat(input(`Momento fletor sobre a peça [Nm]: `));
    y = Number.parseFloat(input(`Raio do rebite [m]: `));
    I = Number.parseFloat(input(`Momento de inércia da geometria [m⁴]: `));
    flexao = M * y / I * 1e-06;
    return [console.log(`A tensão máxima de flexão para o rebite é de ${round(flexao, 2)}MPa`), separator()];
}