import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Starships } from '../interfaces/starships.interface';
import { Observable } from 'rxjs';
import { Starship } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root',
})
export class StarWarsInfoService {

  constructor( private http: HttpClient) {}

  private baseUrl = "https://swapi.dev/api"

  public getStarshipsWithPagination( page: number): Observable<Starships> {
    const url = `${this.baseUrl}/starships/?page=${page} `
    return this.http.get<Starships>(url);
  }

  public getStarshipById(id: string): Observable<Starship> {
    const url = `${this.baseUrl}/starships/${id}`
    return this.http.get<Starship>(url);
  }

}
