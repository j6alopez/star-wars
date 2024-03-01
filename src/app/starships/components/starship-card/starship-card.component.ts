import { Component, Input } from '@angular/core';
import { StarshipDTO as Starship } from '../../interfaces/dtos/starship-dto.interface';
import { StarshipImagePipe } from '../../pipes/starship-image.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'starship-card',
  standalone: true,
  imports: [ StarshipImagePipe, AsyncPipe],
  templateUrl: './starship-card.component.html',
  styleUrl: './starship-card.component.scss',
})
export class StarshipCardComponent {
  @Input()
  public starship?: Starship;
  @Input()
  public starshipId?: string;
}
