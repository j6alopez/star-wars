import { TestBed } from '@angular/core/testing';

import { StarWarsImageService } from './star-wars-image.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StarWarsImageService', () => {
    let service: StarWarsImageService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [StarWarsImageService],
        });

        service = TestBed.inject(StarWarsImageService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getImage', () => {
      it('should return an image url', () => {
        let imageUrl : string | undefined;
        const id : string = '5';
        service.getStarshipImageById(id).subscribe( response => {
          imageUrl = response;
        });
        const req = httpTestingController.expectOne(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
        expect(req.request.method).toBe('HEAD');
        req.flush('', { status: 200, statusText: 'OK'});
        expect(imageUrl).toBeTruthy();
      } )
    })

    it('should return image not found url', () => {
      let imageUrl : string | undefined;
      const id : string = '5';
      service.getStarshipImageById(id).subscribe( response => {
        imageUrl = response;
      });

      const req = httpTestingController.expectOne(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`);
      req.flush('', { status: 404, statusText: 'Not found'});
      const noImageUrl = 'assets/no-image.png'; 

      expect(req.request.method).toBe('HEAD');
      expect(imageUrl).toBe(noImageUrl);
    } )
});

