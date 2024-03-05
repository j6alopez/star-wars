import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';

import { FilmDTO } from '../../../starships/interfaces/dtos/film.dto';
import { FilmImagePipe } from '../../pipes/film-image.pipe';
import { StarWarsInfoService } from '../../../services/star-wars-info.service';

@Component({
  selector: 'film-cards',
  standalone: true,
  imports: [ 
    AsyncPipe,
    FilmImagePipe,
    UpperCasePipe
  ],
  templateUrl: './film-cards.component.html',
  styleUrl: './film-cards.component.scss'
})
export class FilmCardComponent implements OnInit {

  private starwarsInfoService = inject(StarWarsInfoService);

  @Input( {required : true}) 
  public films: string [] = [];
  public movies: FilmDTO [] = [];

  ngOnInit(): void {
    this.films.forEach( url => {
      this.starwarsInfoService.getFilm(url).subscribe( dto => this.movies.push( dto));
    })
  }

}
