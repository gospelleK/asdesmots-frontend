import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

const baseUrl = 'https://api-dev.asdesmots.om/game-arcarde';


export class ArcadeService {

  constructor(private http: HttpClient) { }


 /*listing des arcades */
  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  /*Creation d'une arcade */
  create(data) {
    return this.http.post(baseUrl, data);
  }


}
