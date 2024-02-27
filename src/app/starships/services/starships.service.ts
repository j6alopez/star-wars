import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StarshipsDTO } from '../interfaces/starships-dto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {

  constructor( private http: HttpClient) {}

  private baseUrl = "https://swapi.dev/api"

  public getStarships(): Observable<StarshipsDTO> {
    const url = `${this.baseUrl}/starships`
    return this.http.get<StarshipsDTO>(url);
  }

}
