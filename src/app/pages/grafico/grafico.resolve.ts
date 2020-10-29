import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RelatorioService} from '../../services/relatorio.service';

@Injectable()
export class GraficoResolve implements Resolve<any[]>{

  constructor(private relatorioService: RelatorioService){}

  // @ts-ignore
  async resolve(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Promise<Observable<any[]> | Promise<any[]> | any[]> {
    let data = [];
    let dataPoints = [];

    await this.relatorioService.buscarDadosRelatorioVagasOcupadas()
      .then((resultado: any[]) => {
        resultado.forEach(r => {
          dataPoints.push({y: r.total, label: r.nome});
        });

        data.push(
          {
            type: 'column',
            dataPoints: dataPoints
        });
      });

    return data;
  }

}
