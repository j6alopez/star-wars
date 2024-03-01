import { Pipe, PipeTransform, inject } from '@angular/core';
import { StarWarsImageService } from '../../services/star-wars-image.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'filmImage',
  standalone: true
})
export class FilmImagePipe implements PipeTransform {

  private imageService = inject(StarWarsImageService);

  transform( filmId: string ): Observable<string> {
    return this.imageService.getFilmImageById( filmId);
  }

}
