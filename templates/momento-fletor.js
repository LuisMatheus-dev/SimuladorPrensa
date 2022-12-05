// Função momento fletor
function momFletor(cls) {
    var F, l, resMomento;
    separator();
    console.log('Função selecionada: Cálculo de Momento Fletor.');
    F = Number.parseFloat(input('Intensidade da força que origina o Momento Fletor [N]: '));
    l = Number.parseFloat(input('Distância entre o ponto de referência e o ponto onde a força é aplicada[m]: '));
    resMomento = F * l;
    return [console.log('O valor do momento fletor é de ${round(resMomento, 2)}Nm'), separator()];
}