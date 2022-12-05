// Calculo de força resultante
function calcular_resultante(cls) {
    var angulo, forca_result, total_x, total_y, valor_x, valor_y, vetor, vetor_ang, vetores_x, vetores_y;
    separator();
    console.log("");
    console.log(`Função selecionada: Cálculo de força resultante.`);
    vetores_x = [];
    vetores_y = [];
  
    while (true) {
      vetor = input(`Digite a intensidade da força [N], ou 'q' para finalizar:`);
  
      if (vetor === "q") {
        break;
      } else {
        vetor_ang = input(`Digite o ângulo [°] entre o vetor e o eixo X(anti-horário): `);
        valor_x = Number.parseFloat(vetor) * math.cos(math.radians(Number.parseFloat(vetor_ang)));
        vetores_x.append(valor_x);
        valor_y = Number.parseFloat(vetor) * math.sin(math.radians(Number.parseFloat(vetor_ang)));
        vetores_y.append(valor_y);
      }
    }
  
    total_x = sum(vetores_x);
    total_y = sum(vetores_y);
    forca_result = round(math.sqrt(Math.pow(total_x, 2) + Math.pow(total_y, 2)), 2);
    angulo = round(math.degrees(math.atan(total_y / total_x)));
    return [console.log(`A força resultante é de ${forca_result}N com um ângulo de ${angulo}° em relação ao eixo X`), separator()];
}