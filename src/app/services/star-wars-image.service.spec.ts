import { TestBed } from '@angular/core/testing';

import { StarWarsImageService } from './star-wars-image.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StarWarsImageService', () => {
  let service: StarWarsImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StarWarsImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
