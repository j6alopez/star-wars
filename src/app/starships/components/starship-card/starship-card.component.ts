import { Component, Input, OnInit } from '@angular/core';
import { StarWarsImageService } from '../../services/star-wars-image.service';
import { UrlUtilsService } from '../../../utils/url-utils/url-utils.service';
import { Starship } from '../../interfaces/starships.interface';

@Component({
  selector: 'starship-card',
  standalone: true,
  imports: [],
  templateUrl: './starship-card.component.html',
  styleUrl: './starship-card.component.scss',
})
export class StarshipCardComponent implements OnInit {
  @Input()
  public starShip!: Starship;
  public urlImage: string = '';

  constructor(private imageService: StarWarsImageService) {}

  ngOnInit(): void {
    if (!this.starShip) throw Error('Starship property is required');

    const id: string | undefined = UrlUtilsService.extractStarShipIdFromSwApi(this.starShip.url);

    if (id) {
      this.urlImage = this.imageService.getStarshipImage(id);
    }
  }
}
