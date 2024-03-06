import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsImageService {

  constructor( private http: HttpClient) {}

  private baseUrl = "https://starwars-visualguide.com"
  private noImageUrl = "assets/no-image.png"

  public getStarshipImageById(id: string): Observable<string> {
    const imageUrl: string = `${this.baseUrl}/assets/img/starships/${id}.jpg`; 
    return this.http.head(imageUrl).pipe(
      map(() => imageUrl), 
      catchError( () => of(this.noImageUrl) )
    )
  }

  public getCharacterImageById(id: string): Observable<string> {
    const imageUrl: string = `${this.baseUrl}/assets/img/characters/${id}.jpg`; 

    return this.http.head(imageUrl).pipe(
      map(() => imageUrl), 
      catchError( () => of(this.noImageUrl) )
    )
  }

  public getFilmImageById(id: string): Observable<string> {
    const imageUrl: string = `${this.baseUrl}/assets/img/films/${id}.jpg`; 
    return this.http.head(imageUrl).pipe(
      map(() => imageUrl), 
      catchError( () => of(this.noImageUrl) )
    )
  }

}
