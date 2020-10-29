import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class NotFoundService {
  notFound = new EventEmitter<boolean>();
}
