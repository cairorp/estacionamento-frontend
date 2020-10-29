import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Estacionamento} from '../../../../models/entity/estacionamento';
import {Observable} from 'rxjs';
import {EstacionamentoService} from '../../../../services/estacionamento.service';

@Injectable()
export class VagasResolve implements Resolve<Estacionamento>{
  constructor(private estacionamentoService: EstacionamentoService){
  }

  // @ts-ignore
  async resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Promise<Observable<Estacionamento> | Promise<Estacionamento> | Estacionamento> {
    let id: string =
     route.queryParams['id'];
    let estacionamento = {};

    await this.estacionamentoService.buscarPorId(id)
      .then((est: Estacionamento) => {
        estacionamento = est;
      });

    // @ts-ignore
    return estacionamento;
  }

}
