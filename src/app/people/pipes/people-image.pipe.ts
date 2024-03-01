import { Pipe, PipeTransform, inject } from '@angular/core';
import { StarWarsImageService } from '../../services/star-wars-image.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'peopleImage',
  standalone: true
})
export class PeopleImagePipe implements PipeTransform {

  private imageService = inject(StarWarsImageService);

  transform( characterId: string ): Observable<string> {
    return this.imageService.getCharacterImageById( characterId);
  }

}
