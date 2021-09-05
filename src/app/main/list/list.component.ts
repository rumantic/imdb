import { Component, OnInit } from '@angular/core';
import {ImdbService} from "../../_services/imdb.service";
import {MovieModel} from "../../_models/movie.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public movieList: MovieModel[] = [];

  constructor(
    private imdbService: ImdbService,
  ) {
  }

  ngOnInit(): void {
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
