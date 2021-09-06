import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() { }

  term_change(term: string) {
    this.change.emit(term);
  }

}
