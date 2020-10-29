export class EstacionamentoDto {
  id: number;
  nome: string;
  totalVagas: number;

  constructor(id: number = 0, nome: string = '', totalVagas: number = 0) {
    this.id = id;
    this.nome = nome;
    this.totalVagas = totalVagas;
  }
}
