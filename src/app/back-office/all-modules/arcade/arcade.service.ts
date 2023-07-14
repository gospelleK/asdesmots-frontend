

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArcadeService {
  private apiUrl = 'https://api-dev.asdesmots.com/game-arcarde';

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  add(aracde : any) {
    return this.http.post(`${this.apiUrl}`, aracde)
  }
}
