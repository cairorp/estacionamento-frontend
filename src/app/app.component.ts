import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PrimeNGConfig} from 'primeng/api';
import {NotFoundService} from './services/not-found.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  notFound: boolean = false;
  title = 'Parking Manager';


  constructor(private notFoundService: NotFoundService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private primengConfig: PrimeNGConfig) {
    this.notFoundService.notFound.subscribe( r => {
      this.notFound = r;
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}

