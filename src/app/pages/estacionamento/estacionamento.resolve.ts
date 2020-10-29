import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EstacionamentoDto} from '../../models/dto/estacionamento.dto';
import {Observable} from 'rxjs';
import {EstacionamentoService} from '../../services/estacionamento.service';

@Injectable()
export class EstacionamentoResolve implements Resolve<EstacionamentoDto[]>{

  constructor(private estacionamentoService: EstacionamentoService) {
  }

  // @ts-ignore
  async resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Promise<EstacionamentoDto[] | Observable<EstacionamentoDto[]>> {

    let estacionamentos: EstacionamentoDto[] = [];

    await this.estacionamentoService.buscarTodos()
      .then((est : EstacionamentoDto[]) =>
      {
        estacionamentos.push(...est);
      });

    return estacionamentos;
  }

}
