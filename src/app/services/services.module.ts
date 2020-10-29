import {NgModule} from '@angular/core';
import {MessageService} from 'primeng/api';
import {MensagemService} from './mensagem.service';
import {NotFoundService} from './not-found.service';
import {EstacionamentoService} from './estacionamento.service';
import {VagaService} from './vaga.service';
import {RelatorioService} from './relatorio.service';

@NgModule({
  providers: [
    EstacionamentoService,
    RelatorioService,
    MensagemService,
    NotFoundService,
    MessageService,
    VagaService
  ]
})
export class ServicesModule {
}
