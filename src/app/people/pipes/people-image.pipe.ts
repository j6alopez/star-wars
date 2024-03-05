import { Pipe, PipeTransform, inject } from '@angular/core';
import { StarWarsImageService } from '../../services/star-wars-image.service';
import { Observable } from 'rxjs';
import { UrlUtilsService } from '../../utils/url-utils/url-utils.service';

@Pipe({
  name: 'peopleImage',
  standalone: true
})
export class PeopleImagePipe implements PipeTransform {

  private imageService = inject(StarWarsImageService);

  transform( url: string ): Observable<string> {
    const characterId: string = UrlUtilsService.extractIdFromSwApi(url) || '';
    return this.imageService.getCharacterImageById( characterId);
  }

}
