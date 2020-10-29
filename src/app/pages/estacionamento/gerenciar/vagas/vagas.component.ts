import {Component} from '@angular/core';
import {Estacionamento} from '../../../../models/entity/estacionamento';
import {Vaga} from '../../../../models/entity/vaga';
import {ActivatedRoute, Router} from '@angular/router';
import {VagaService} from '../../../../services/vaga.service';
import {MensagemService} from '../../../../services/mensagem.service';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EstacionamentoGraficoComponent} from './grafico/estacionamento-grafico.component';

@Component({
  templateUrl: 'vagas.component.html',
  styleUrls: ['vagas.component.scss']
})
export class VagasComponent {
  estacionamento: Estacionamento;
  totalVagas: number;
  vagasOcupadas: number = 0;
  vagasDisponiveis: number = 0;
  private ref: DynamicDialogRef;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private vagaService: VagaService,
              private messagemService: MensagemService,
              private dialogService: DialogService) {

    this.estacionamento = this.route.snapshot.data['dados'];

    this.totalVagas = this.estacionamento.vagas.length;

    this.estacionamento.vagas.forEach(vaga => {
      if (vaga.status) {
        this.vagasOcupadas++;
      } else {
        this.vagasDisponiveis++;
      }
    });

  }

  voltar() {
    this.router.navigate(['']);
  }

  corVaga(status: boolean) {
    return {
      'background': status ? '#ee716b' : '#abd97b'
    };
  }

  alterarStatus(vaga: Vaga) {
    let statusTemp = !vaga.status;
    this.vagaService.alterarStatus(vaga.id, statusTemp, vaga.posicao)
      .then(() => {
        vaga.status = statusTemp;
        this.corVaga(vaga.status);
        if (vaga.status) {
          this.vagasDisponiveis--;
          this.vagasOcupadas++;
          this.messagemService.sucesso(`A vaga ${vaga.posicao} foi ocupada com sucesso.`);
        } else {
          this.vagasDisponiveis++;
          this.vagasOcupadas--;
          this.messagemService.sucesso(`A vaga ${vaga.posicao} foi desocupada com sucesso.`);
        }
      });

  }

  abrirModalGrafico() {
    this.ref = this.dialogService.open(EstacionamentoGraficoComponent, {
      header: `Gráfico de vagas`,
      width: '50%',
      contentStyle: {'max-height': '800px', 'overflow': 'auto'},
      baseZIndex: 10000,
      data: {
        total: this.totalVagas,
        diponiveis: this.vagasDisponiveis,
        ocupadas: this.vagasOcupadas
      }
    });

  }

}
