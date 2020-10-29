import {Component, OnInit} from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: 'grafico.component.html',
  styleUrls: ['grafico.component.scss']
})
export class GraficoComponent implements OnInit {
  private dados: any[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.dados = this.route.snapshot.data['dados'];
  }

  ngOnInit(): void {
    let chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Vagas ocupadas em cada estacionamento'
      },
      data: this.dados
    });

    chart.render();
  }

  voltar() {
    this.router.navigate(['']);
  }
}
