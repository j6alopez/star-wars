import { TestBed } from '@angular/core/testing';

import { StarWarsInfoService } from './star-wars-info.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('StarWarsInfoService', () => {
  let service: StarWarsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StarWarsInfoService],
    });
    service = TestBed.inject(StarWarsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
