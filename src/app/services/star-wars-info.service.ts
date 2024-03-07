import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StarshipsDTO } from '../starships/interfaces/dtos/starships-dto.interface';
import { Observable } from 'rxjs';
import { StarshipDTO } from '../starships/interfaces/dtos/starship-dto.interface';
import { PeopleDTO } from '../starships/interfaces/dtos/people-dto.interface';
import { FilmDTO } from '../starships/interfaces/dtos/film.dto';

@Injectable({
  providedIn: 'root',
})
export class StarWarsInfoService {

  private http: HttpClient = inject(HttpClient);

  private baseUrl = "https://swapi.py4e.com/api";

  public getStarshipsWithPagination( page: number): Observable<StarshipsDTO> {
    const url = `${this.baseUrl}/starships/?page=${page} `
    return this.http.get<StarshipsDTO>(url);
  }

  public getStarshipById( id: string): Observable<StarshipDTO> {
    const url = `${this.baseUrl}/starships/${id}`
    return this.http.get<StarshipDTO>(url);
  }

  public getPeople( url: string): Observable<PeopleDTO> {
    return this.http.get<PeopleDTO>(url);
  }

  public getFilm( url: string): Observable<FilmDTO> {
    return this.http.get<FilmDTO>(url);
  }

}
