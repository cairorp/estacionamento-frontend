import {Component, OnInit} from '@angular/core';
import * as CanvasJS from '../../../../../../assets/canvasjs.min.js';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

@Component({
  templateUrl: 'estacionamento-grafico.component.html',
  styleUrls: ['estacionamento-grafico.component.scss']
})
export class EstacionamentoGraficoComponent implements OnInit{
  dados: any;
  private ocupadas: number;
  private disponiveis: number;

  constructor(private dynamicDialogRef: DynamicDialogRef,
              private dynamicDialogConfig: DynamicDialogConfig){
    this.dados = this.dynamicDialogConfig.data;
    this.ocupadas = this.dados.ocupadas;
    this.disponiveis = this.dados.diponiveis;
  }

  ngOnInit(): void {
    console.log(this.ocupadas);
    console.log(this.disponiveis);

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Análise"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: this.ocupadas, name: "Vagas ocupadas" },
          { y: this.disponiveis, name: "Vagas disponíveis" },
        ]
      }]
    });

    chart.render();
  }

  fechar() {
    this.dynamicDialogRef.close();
  }

}
