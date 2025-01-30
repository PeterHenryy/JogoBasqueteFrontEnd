//objeto estabelecendo propriedades a serem mostradas ao usuário ao clicar em Ver Resultados no Menu

export interface ResultadoJogos{
  dataPrimeiroJogo: string,
  dataUltimoJogo: string,
  jogosDisputados: number,
  totalPontosTemporada: number,
  mediaPontosPorJogo: number,
  maiorPontuacaoEmJogo: number,
  menorPontuacaoEmJogo: number,
  qtdVezesBateuRecorde: number
}