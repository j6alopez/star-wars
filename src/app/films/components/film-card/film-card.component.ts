import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FilmImagePipe } from '../../pipes/film-image.pipe';

@Component({
  selector: 'film-card',
  standalone: true,
  imports: [ 
    AsyncPipe,
    FilmImagePipe
  ],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss'
})
export class FilmCardComponent {

}
