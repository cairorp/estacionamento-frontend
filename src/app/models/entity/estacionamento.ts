import {Vaga} from './vaga';

export class Estacionamento {
  id: number;
  nome: string;
  vagas: Vaga[];

  constructor(id: number = 0,
              nome: string = '',
              vagas: Vaga[] = []) {
    this.id = id;
    this.nome = nome;
    this.vagas = vagas;
  }
}
