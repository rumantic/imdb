import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {MovieModel} from "../../../_models/movie.model";
import {FilterService} from "../../../_services/filter.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchControl: FormControl;
  private debounce: number = 800;

  constructor(
    private filterService: FilterService
  ) {
    this.searchControl = new FormControl('');
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(this.debounce),
        distinctUntilChanged(),
      )
      .subscribe((result: string) => {
        this.filterService.term_change(result);
      });
  }

}
