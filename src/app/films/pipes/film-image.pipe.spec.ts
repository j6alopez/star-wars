import { TestBed } from '@angular/core/testing';
import { FilmImagePipe } from './film-image.pipe';
import { StarWarsImageService } from '../../services/star-wars-image.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FilmImagePipe', () => {
  let pipe: FilmImagePipe;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [HttpClientTestingModule],
      providers: [
        FilmImagePipe,
        StarWarsImageService,
      ]
    });

    pipe = TestBed.inject(FilmImagePipe);
    
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
