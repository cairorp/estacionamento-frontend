import {Injectable} from '@angular/core';
import {Requests} from '../helpers/requests';
import {EstacionamentoDto} from '../models/dto/estacionamento.dto';

@Injectable()
export class EstacionamentoService {

  private urlComplemento: string = '/estacionamentos';

  constructor(private requests: Requests) {
  }

  cadastrar(estacionamento: EstacionamentoDto) {
    return this.requests.post(this.urlComplemento,
      'Ocorreu um erro ao tentar cadastrar o estacionamento.',
      estacionamento);
  }

  buscarTodos() {
    return this.requests.get(this.urlComplemento,
      'Ocorreu um erro ao buscar os estacionamentos.');
  }

  alterar(estacionamento: EstacionamentoDto, id: number) {
    return this.requests.put(`${this.urlComplemento}/${id}`,
      'Ocorreu um erro ao tentar atualizar os dados do estacionamento',
      estacionamento);
  }

  deletar(id: number) {
    return this.requests.delete(`${this.urlComplemento}/${id}`,
      'Ocorreu um erro ao tentar deletar o estacionamento');
  }

  buscarPorId(id: any) {
    return this.requests.get(`${this.urlComplemento}/${id}`,
      'Ocorreu um erro ao buscar o estacionamento selecionado.');
  }
}
