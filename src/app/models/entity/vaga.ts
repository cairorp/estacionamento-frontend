export class Vaga {
  id: number;
  posicao: number;
  status: boolean;

  constructor(id: number = 0,
              posicao: number = 0,
              status: boolean = false) {
    this.id = id;
    this.posicao = posicao;
    this.status = status;
  }
}
