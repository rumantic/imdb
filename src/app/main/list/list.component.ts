import { Component, OnInit } from '@angular/core';
import {ImdbService} from "../../_services/imdb.service";
import {MovieModel} from "../../_models/movie.model";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/operators";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public movieList: MovieModel[] = [];
  displayedColumns: string[] = ['title'];
  public searchControl: FormControl;
  private debounce: number = 800;

  constructor(
    private imdbService: ImdbService,
  ) {
    this.searchControl = new FormControl('');
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(this.debounce),
        distinctUntilChanged(),
        switchMap( term => this.imdbService.list(term))
      )
      .subscribe((result: any) => {
        result.items.forEach((item: MovieModel) => {
          this.movieList.push(item);
        });
      });

    //this.init_list();
    this.init_fake_list();
  }

  init_fake_list () {
    for ( let i = 0; i <= 100; i++ ) {
      this.movieList.push({
        id: Math.random().toString(),
        rank: '5',
        title: 'The Lord of the rings',
        fullTitle: 'The Lord of the rings',
        year: '2001',
        image: 'https://img4.labirint.ru/rc/fd814ea6cab12f08de9688d984989740/220x340/books41/403608/cover.jpg?1563724018',
        crew: 'Crew',
        imDbRating: '234',
        imDbRatingCount: '4444',
      });
    }

  }

  init_list () {
    this.imdbService.list().subscribe(
      (result: any) => {
        result.items.forEach((item: MovieModel) => {
          this.movieList.push(item);
        });
        console.log(this.movieList);
        if ( result ) {
        }
      },
      error => {
        console.log(error);
      },
    );
  }

}
