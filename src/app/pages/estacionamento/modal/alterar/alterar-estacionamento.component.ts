import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EstacionamentoService} from '../../../../services/estacionamento.service';
import {EstacionamentoDto} from '../../../../models/dto/estacionamento.dto';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: 'alterar-estacionamento.component.html',
  styleUrls: ['alterar-estacionamento.component.scss']
})
export class AlterarEstacionamentoComponent implements OnInit {
  estacionamento: EstacionamentoDto;
  editarEstacionamentoForm: FormGroup;

  constructor(private dynamicDialogRef: DynamicDialogRef,
              private dynamicDialogConfig: DynamicDialogConfig,
              private estacionamentoService: EstacionamentoService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.estacionamento = this.dynamicDialogConfig.data;

    this.editarEstacionamentoForm = this.formBuilder.group({
      nome: new FormControl(this.estacionamento.nome, [Validators.required]),
      quantidadeVagas: new FormControl(this.estacionamento.totalVagas, [Validators.required, Validators.min(1), Validators.max(2000)])
    });
  }

  salvar() {
    this.estacionamentoService.alterar(this.getEstacionamento(), this.estacionamento.id)
      .then((estacionamento: EstacionamentoDto) => {
        this.dynamicDialogRef.close(estacionamento);
      });
  }

  fechar() {
    this.dynamicDialogRef.close();
  }

  get f() {
    return this.editarEstacionamentoForm.controls;
  }

  getEstacionamento() {
    return <EstacionamentoDto> {
      nome: this.f.nome.value,
      totalVagas: this.f.quantidadeVagas.value
    };
  }
}
