import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PeopleImagePipe } from './people-image.pipe';

describe('PeopleImagePipe', () => {
  let pipe: PeopleImagePipe;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [HttpClientTestingModule],
      providers: [PeopleImagePipe]
    })

    pipe = TestBed.inject(PeopleImagePipe);

  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
