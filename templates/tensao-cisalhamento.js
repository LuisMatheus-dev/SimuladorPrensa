// Calculo de tensão de cisalhamento
function tensaoCis(cls) {
    var N, Q, d, n, posCis, posIndex, posNome, result, resultIndex, result_cis;
    separator();
    console.log("");
    console.log(`Função selecionada: Tensão de cisalhamento sobre o(s) rebite(s).`);
    Q = Number.parseFloat(input(`Carga cortante exercida sobre a peça [N]: `));
    n = Number.parseFloat(input(`Número de rebites: `));
    N = Number.parseFloat(input(`Quantidade de pontos onde o rebite sofrerá cisalhamento: `));
    d = Number.parseFloat(input(`Diâmetro do(s) rebite(s) [mm]: `));
    result_cis = round(Q / (n * N * (math.pi / 4) * math.pow(d, 2)));
    console.log(`Tensão de cisalhamento sobre os rebites: ${result_cis}MPa`);
  
    result = function () {
      var _pj_a = [],
          _pj_b = mat_esc;
  
      for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
        var mat_esc = _pj_b[_pj_c];
  
        _pj_a.push(mat_esc - result_cis);
      }
  
      return _pj_a;
    }.call(this);
  
    resultIndex = min(function () {
      var _pj_a = [],
          _pj_b = result;
  
      for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
        var result = _pj_b[_pj_c];
  
        if (result > 0) {
          _pj_a.push(result);
        }
      }
  
      return _pj_a;
    }.call(this));
    posIndex = result.index(resultIndex);
    posNome = nome_mats[posIndex];
    posCis = mat_esc[posIndex];
  
    if (posIndex === 0) {
      return [console.log("Nenhum dos materiais da base de materiais possui resist\u00eancia suficiente para a aplica\u00e7\u00e3o.\nTente aumentar a quantidade de rebites ou seu di\u00e2metro.\n"), separator()];
    } else {
      return [console.log(`O material mais indicado para sua aplicação, considerando a resistência do material, é o ${posNome},
  com uma tensão limite de ${posCis}MPa.`), separator()];
    }
}