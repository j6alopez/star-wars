import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StarshipsDTO } from '../interfaces/dtos/starships-dto.interface';
import { Observable } from 'rxjs';
import { StarshipDTO } from '../interfaces/dtos/starship-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class StarWarsInfoService {

  constructor( private http: HttpClient) {}

  private baseUrl = "https://swapi.dev/api"

  public getStarshipsWithPagination( page: number): Observable<StarshipsDTO> {
    const url = `${this.baseUrl}/starships/?page=${page} `
    return this.http.get<StarshipsDTO>(url);
  }

  public getStarshipById( id: string): Observable<StarshipDTO> {
    const url = `${this.baseUrl}/starships/${id}`
    return this.http.get<StarshipDTO>(url);
  }

}
