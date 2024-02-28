import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { StarWarsInfoService } from '../../services/star-wars-info.service';
import { Starship } from '../../interfaces/starship.interface';
import { StarshipImagePipe } from '../../pipes/starship-image.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-starship-page',
    standalone: true,
    templateUrl: './starship-page.component.html',
    styleUrl: './starship-page.component.scss',
    imports: [StarshipImagePipe, AsyncPipe],
})
export class StarShipPageComponent implements OnInit {
    private router = inject(Router);
    private activatedRouter = inject(ActivatedRoute);
    private starwarsInfoService = inject(StarWarsInfoService);

    public starship?: Starship;
    public starshipId: string = '';

    ngOnInit(): void {
        this.activatedRouter.params
            .pipe(
                map((params) => params['id']),
                tap((id) => (this.starshipId = id)),
                switchMap((id) => this.starwarsInfoService.getStarshipById(id))
            )
            .subscribe((starship) => (this.starship = starship));
    }
}
