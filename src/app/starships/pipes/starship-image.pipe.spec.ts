import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { StarshipImagePipe } from './starship-image.pipe';

describe('StarshipImagePipe', () => {
  let pipe: StarshipImagePipe;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [HttpClientTestingModule],
      providers: [StarshipImagePipe]
    })

    pipe = TestBed.inject(StarshipImagePipe);

  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});