import { TestBed } from '@angular/core/testing';

import { StarWarsImageService } from './star-wars-image.service';

describe('StarWarsImageService', () => {
  let service: StarWarsImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
