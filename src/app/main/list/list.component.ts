import { Component, OnInit } from '@angular/core';
import {ImdbService} from "../../_services/imdb.service";
import {MovieModel} from "../../_models/movie.model";
import {FilterService} from "../../_services/filter.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public movieList: MovieModel[] = [];
  dataSource = new MatTableDataSource<MovieModel>();
  displayedColumns: string[] = ['image','title'];

  constructor(
    private imdbService: ImdbService,
    private filterService: FilterService
  ) {
  }

  ngOnInit(): void {
    /*
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
     */

    this.init_list();
    this.filterService.change.subscribe((result: any) => {
        this.update_list(result);
        localStorage.setItem('search', result);
      }
    );
    //this.init_fake_list();
  }

  /*
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
   */

  update_list (term:any) {
    this.imdbService.search(term).subscribe(
      (result: any) => {
        console.log(result);
        this.dataSource.data = [];
        this.movieList = [];
        result.results.forEach((item: MovieModel) => {
          this.movieList.push(item);
        });
        this.dataSource.data = this.movieList;
      },
      error => {
        console.log(error);
      },
    );
  }

  init_list () {
    if ( localStorage.getItem('search') != null ) {
      this.update_list(localStorage.getItem('search'));
    } else {
      this.imdbService.list().subscribe(
        (result: any) => {
          result.items.forEach((item: MovieModel) => {
            this.movieList.push(item);
          });
          this.dataSource.data = this.movieList;
        },
        error => {
          console.log(error);
        },
      );
    }
  }

}
