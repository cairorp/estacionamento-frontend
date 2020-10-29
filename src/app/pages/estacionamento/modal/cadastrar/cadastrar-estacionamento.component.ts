import {Component, OnInit} from '@angular/core';
import {EstacionamentoDto} from '../../../../models/dto/estacionamento.dto';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicDialogRef} from 'primeng/dynamicdialog';
import {MensagemService} from '../../../../services/mensagem.service';
import {EstacionamentoService} from '../../../../services/estacionamento.service';

@Component({
  templateUrl: 'cadastrar-estacionamento.component.html',
  styleUrls: ['cadastrar-estacionamento.component.scss']
})
export class CadastrarEstacionamentoComponent implements OnInit {

  estacionamento: EstacionamentoDto;
  cadastroEstacionamentoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private estacionamentoService: EstacionamentoService,
              private dialogConfig: DynamicDialogRef) {
  }

  ngOnInit(): void {
    this.cadastroEstacionamentoForm = this.formBuilder.group({
      nome: new FormControl('', [Validators.required]),
      quantidadeVagas: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(2000)])
    });
  }


  salvar() {
    this.estacionamentoService.cadastrar(this.getEstacionamento())
      .then((estacionamento: EstacionamentoDto) => {
        this.dialogConfig.close(estacionamento);
      });
  }

  fechar() {
    this.dialogConfig.close();
  }

  get f() {
    return this.cadastroEstacionamentoForm.controls;
  }

  getEstacionamento() {
    return <EstacionamentoDto> {
      nome: this.f.nome.value,
      totalVagas: this.f.quantidadeVagas.value
    };
  }
}
