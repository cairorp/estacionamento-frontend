import {Component, OnInit} from '@angular/core';
import {NotFoundService} from '../../services/not-found.service';

@Component({
  templateUrl: 'not-found.component.html',
  styleUrls: ['not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  constructor(private notFoundService: NotFoundService) {
  }

  ngOnInit(): void {
    this.notFoundService.notFound.emit(true);
  }

}
