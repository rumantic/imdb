import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ImdbService} from "../../_services/imdb.service";
import {MovieModel} from "../../_models/movie.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public movie_id: string | null;
  public movieItem: MovieModel;

  constructor(
    private route: ActivatedRoute,
    private imdbService: ImdbService,
  ) {
    this.movie_id = this.route.snapshot.paramMap.get('movie_id');
    this.movieItem = <MovieModel>{};
  }

  ngOnInit(): void {
    this.imdbService.detail(this.movie_id).subscribe(
      (result: any) => {
        console.log(result);
        this.movieItem = result;
      },
      error => {
        console.log(error);
      },
    );
  }

}
