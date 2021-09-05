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
  }

  get_api_key () {
    return 'k_4bxcrmgj';
  }

  list () {
    return this.http.get(`${this.get_api_url()}Top250Movies/${this.get_api_key()}`);
  }

}
