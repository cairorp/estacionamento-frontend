import {Component, OnInit} from '@angular/core';
import {EstacionamentoDto} from '../../models/dto/estacionamento.dto';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {CadastrarEstacionamentoComponent} from './modal/cadastrar/cadastrar-estacionamento.component';
import {MensagemService} from '../../services/mensagem.service';
import {AlterarEstacionamentoComponent} from './modal/alterar/alterar-estacionamento.component';
import {DeletarEstacionamentoComponent} from './modal/deletar/deletar-estacionamento.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: 'estacionamento.component.html',
  styleUrls: ['estacionamento.component.scss']
})
export class EstacionamentoComponent implements OnInit {
  estacionamentos: EstacionamentoDto[] = [];
  private ref: DynamicDialogRef;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dialogService: DialogService,
              private mensagemService: MensagemService) {
    this.estacionamentos = this.route.snapshot.data['dados'];
  }

  ngOnInit(): void {

  }

  abrirModalCadastrar() {
    this.ref = this.dialogService.open(CadastrarEstacionamentoComponent, {
      header: `Cadastrar novo estacionamento`,
      width: '30%',
      contentStyle: {'max-height': '500px', 'overflow': 'auto'},
      baseZIndex: 10000,
      closable: false,
    });

    this.ref.onClose.subscribe((result: EstacionamentoDto) => {
      if (result) {
        this.estacionamentos.push(result);
        this.mensagemService.sucesso('Estacionamento cadastrado com sucesso.');
      }
    });
  }

  abrirModalEditar(estacionamento) {
    this.ref = this.dialogService.open(AlterarEstacionamentoComponent, {
      header: `Alterar dados`,
      width: '30%',
      contentStyle: {'max-height': '500px', 'overflow': 'auto'},
      baseZIndex: 10000,
      closable: false,
      data: estacionamento
    });

    this.ref.onClose.subscribe((result: EstacionamentoDto) => {
      if (result) {
        this.estacionamentos = this.estacionamentos.filter(es => es.id !== result.id);
        this.estacionamentos.push(result);
        this.mensagemService.sucesso('Estacionamento alterado com sucesso.');
      }
    });
  }

  abrirGerenciadorVagas(id: any) {
    this.router.navigate(['vagas'], {queryParams: {'id': id}});
  }

  abrirConfirmarExclusao(estacionamento) {
    this.ref = this.dialogService.open(DeletarEstacionamentoComponent, {
      header: `Deletar estacionamento`,
      width: '30%',
      contentStyle: {'max-height': '500px', 'overflow': 'auto'},
      baseZIndex: 10000,
      closable: false,
      data: estacionamento
    });

    this.ref.onClose.subscribe((result: EstacionamentoDto) => {
      if (result) {
        this.estacionamentos = this.estacionamentos.filter(es => es.id !== result.id);
        this.mensagemService.sucesso('Estacionamento excluido com sucesso.');
      }
    });
  }

  abrirEstatisticas() {
    this.router.navigate(['grafico']);
  }
}
