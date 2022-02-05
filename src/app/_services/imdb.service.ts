import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor(
    private http: HttpClient,
  ) { }

  get_api_url() {
    return 'https://imdb-api.com/en/API/';
    //return 'http://localhost/en/API/';
  }

  get_api_key () {
    return 'k_okoxmou9';
  }

  list () {
    return this.http.get(`${this.get_api_url()}Top250Movies/${this.get_api_key()}`);
  }

  search (expression: string) {
    return this.http.get(`${this.get_api_url()}Search/${this.get_api_key()}/${expression}`);
  }

  detail ( movie_id: any ) {
    return this.http.get(`${this.get_api_url()}Title/${this.get_api_key()}/${movie_id}`);
  }

}
