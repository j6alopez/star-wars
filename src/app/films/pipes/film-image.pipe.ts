import { Pipe, PipeTransform, inject } from '@angular/core';
import { StarWarsImageService } from '../../services/star-wars-image.service';
import { Observable } from 'rxjs';
import { UrlUtilsService } from '../../utils/url-utils/url-utils.service';

@Pipe({
  name: 'filmImage',
  standalone: true
})
export class FilmImagePipe implements PipeTransform {

  private imageService = inject(StarWarsImageService);

  transform( url: string ): Observable<string> {
    const filmId: string = UrlUtilsService.extractIdFromSwApi(url) || '';
    return this.imageService.getFilmImageById( filmId);
  }

}
