import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Starships } from '../interfaces/starships.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarWarsInfoService {

  constructor( private http: HttpClient) {}

  private baseUrl = "https://swapi.dev/api"

  public getStarships(): Observable<Starships> {
    const url = `${this.baseUrl}/starships`
    return this.http.get<Starships>(url);
  }

}
