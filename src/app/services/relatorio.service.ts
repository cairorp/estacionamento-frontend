import {Injectable} from '@angular/core';
import {Requests} from '../helpers/requests';

@Injectable()
export class RelatorioService {
  private urlComplement: string = '/analise';

  constructor(private request: Requests) {
  }

  buscarDadosRelatorioVagasOcupadas(){
    return this.request.get(`${this.urlComplement}/vagas-ocupadas`,
      'Ocorreu um erro ao buscar os dados do relatório.');
  }
}
