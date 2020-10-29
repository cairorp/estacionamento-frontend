import {Component, OnInit} from '@angular/core';
import {EstacionamentoDto} from '../../../../models/dto/estacionamento.dto';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EstacionamentoService} from '../../../../services/estacionamento.service';

@Component({
  templateUrl: 'deletar-estacionamento.component.html',
  styleUrls: ['deletar-estacionamento.component.scss']
})
export class DeletarEstacionamentoComponent implements OnInit {
  estacionamento: EstacionamentoDto;

  constructor(private dynamicDialogRef: DynamicDialogRef,
              private dynamicDialogConfig: DynamicDialogConfig,
              private estacionamentoService: EstacionamentoService) {

  }

  ngOnInit(): void {
    this.estacionamento = this.dynamicDialogConfig.data;
  }

  fechar() {
    this.dynamicDialogRef.close();
  }

  confirmar() {
    this.estacionamentoService.deletar(this.estacionamento.id)
      .then(() => {
        this.dynamicDialogRef.close(this.estacionamento);
      });
  }
}
