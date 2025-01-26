import { type Resultado } from "./resultado.model";
import { type ResultadoJogos } from "./resultado-jogos.model";

export function obterResultados(resultados: ResultadoJogos | undefined): Resultado[]{
  return [

    {
      titulo: 'Jogos disputados',
      valor: resultados?.jogosDisputados
    },
    {
      titulo: 'Total de pontos marcados na temporada',
      valor: resultados?.totalPontosTemporada
    },
    {
      titulo: 'Media de pontos por jogo',
      valor: resultados?.mediaPontosPorJogo
    },
    {
      titulo: 'Maior pontuação em um jogo',
      valor: resultados?.maiorPontuacaoEmJogo
    },
    {
      titulo: 'Menor pontuação em um jogo',
      valor: resultados?.menorPontuacaoEmJogo
    },
    {
      titulo: 'Quantidade de vezes que bateu o próprio recorde',
      valor: resultados?.qtdVezesBateuRecorde
    }
  ];
}