import {NgModule} from '@angular/core';
import {NotFoundComponent} from './not-found/not-found.component';
import {EstacionamentoComponent} from './estacionamento/estacionamento.component';
import {VagasComponent} from './estacionamento/gerenciar/vagas/vagas.component';
import {TableModule} from 'primeng/table';
import {MatDividerModule} from '@angular/material/divider';
import {AlterarEstacionamentoComponent} from './estacionamento/modal/alterar/alterar-estacionamento.component';
import {GraficoComponent} from './grafico/grafico.component';
import {DeletarEstacionamentoComponent} from './estacionamento/modal/deletar/deletar-estacionamento.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {CadastrarEstacionamentoComponent} from './estacionamento/modal/cadastrar/cadastrar-estacionamento.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DialogService} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import {InputNumberModule} from 'primeng/inputnumber';
import {CommonModule} from '@angular/common';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {VagasResolve} from './estacionamento/gerenciar/vagas/vagas.resolve';
import {ChartModule} from 'primeng/chart';
import {GraficoResolve} from './grafico/grafico.resolve';
import {EstacionamentoResolve} from './estacionamento/estacionamento.resolve';
import {EstacionamentoGraficoComponent} from './estacionamento/gerenciar/vagas/grafico/estacionamento-grafico.component';

@NgModule(
  {
    imports: [
      TableModule,
      MatDividerModule,
      ButtonModule,
      RippleModule,
      ReactiveFormsModule,
      ToastModule,
      InputNumberModule,
      CommonModule,
      InfiniteScrollModule,
      ChartModule
    ],
    declarations: [
      NotFoundComponent,
      EstacionamentoComponent,
      AlterarEstacionamentoComponent,
      DeletarEstacionamentoComponent,
      EstacionamentoGraficoComponent,
      CadastrarEstacionamentoComponent,
      GraficoComponent,
      VagasComponent
    ],
    providers: [
      EstacionamentoResolve,
      GraficoResolve,
      DialogService,
      VagasResolve
    ]
  }
)
export class PagesModule {
}
