import { TestBed } from '@angular/core/testing';

import { StarWarsInfoService } from './star-wars-info.service';

describe('StarshipsService', () => {
  let service: StarWarsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
