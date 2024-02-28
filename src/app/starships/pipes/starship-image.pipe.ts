import { Pipe, PipeTransform, inject } from '@angular/core';
import { StarWarsImageService } from '../services/star-wars-image.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'starshipImage',
  standalone: true
})
export class StarshipImagePipe implements PipeTransform {

  private imageService = inject(StarWarsImageService);

  transform(starshipId: string): Observable<string> {
    return this.imageService.getStarshipImageById( starshipId);
  }

}
