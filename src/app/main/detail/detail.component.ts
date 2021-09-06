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
    this.init_fake_movie();
  }

  init_fake_movie () {
    this.movieItem = {
      id: Math.random().toString(),
      rank: '5',
      title: 'The Lord of the rings',
      fullTitle: 'The Lord of the rings',
      year: '2001',
      image: 'https://img4.labirint.ru/rc/fd814ea6cab12f08de9688d984989740/220x340/books41/403608/cover.jpg?1563724018',
      crew: 'Crew',
      imDbRating: '234',
      imDbRatingCount: '4444',
    };

  }

  init_real_movie () {
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
