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
    //return 'https://imdb-api.com/en/API/';
    return 'http://localhost/en/API/';
  }

  get_api_key () {
    return 'k_gm0onob4';
  }

  list (term?: string) {
    return this.http.get(`${this.get_api_url()}Top250Movies/${this.get_api_key()}`);
  }

  detail ( movie_id: any ) {
    return this.http.get(`${this.get_api_url()}Title/${this.get_api_key()}/${movie_id}`);
  }

}
