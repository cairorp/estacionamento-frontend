import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EstacionamentoComponent} from './pages/estacionamento/estacionamento.component';
import {VagasComponent} from './pages/estacionamento/gerenciar/vagas/vagas.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {VagasResolve} from './pages/estacionamento/gerenciar/vagas/vagas.resolve';
import {GraficoComponent} from './pages/grafico/grafico.component';
import {GraficoResolve} from './pages/grafico/grafico.resolve';
import {EstacionamentoResolve} from './pages/estacionamento/estacionamento.resolve';

const routes: Routes = [
  {
    path: '',
    component: EstacionamentoComponent,
    resolve: {
      dados: EstacionamentoResolve
    }
  },
  {
    path: 'vagas',
    component: VagasComponent,
    resolve: {
      dados: VagasResolve
    }
  },
  {
    path: 'grafico',
    component: GraficoComponent,
    resolve: {
      dados: GraficoResolve
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
