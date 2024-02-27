import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsImageService {

  constructor( private http: HttpClient) {}

  private baseUrl = "https://starwars-visualguide.com"

  public getStarshipImage(id: string): string {
    return `${this.baseUrl}/assets/img/starships/${id}.jpg`
  }

}
