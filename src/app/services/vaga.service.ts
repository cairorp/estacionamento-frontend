import {Injectable} from '@angular/core';
import {Requests} from '../helpers/requests';

@Injectable()
export class VagaService {

  private urlComplement: string = '/vagas';

  constructor(private requests: Requests){}

  alterarStatus(idVaga: number, status: boolean, posicaoVaga: number){
    return this.requests.put(`${this.urlComplement}/${idVaga}/status/${status}`,
      `Ocorreu um erro ao tentar ` + status ? 'ocupar' : 'desocupar' + ` a vaga ${posicaoVaga}.`);
  }
}
