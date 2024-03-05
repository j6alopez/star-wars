import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';

import { FilmCardComponent } from '../../../films/components/film-card/film-cards.component';
import { PeopleCardComponent } from '../../../people/people-card/people-card.component';
import { StarshipCardComponent } from '../../components/starship-card/starship-card.component';
import { StarshipDTO } from '../../interfaces/dtos/starship-dto.interface';
import { StarshipImagePipe } from '../../pipes/starship-image.pipe';
import { StarWarsInfoService } from '../../../services/star-wars-info.service';

@Component({
    selector: 'starship-page',
    standalone: true,
    templateUrl: './starship-page.component.html',
    styleUrl: './starship-page.component.scss',
    imports: [
        AsyncPipe,
        FilmCardComponent,
        PeopleCardComponent,
        StarshipCardComponent,
        StarshipImagePipe,
    ],
})
export default class StarShipPageComponent implements OnInit {
    private router = inject(Router);
    private activatedRouter = inject(ActivatedRoute);
    private starwarsInfoService = inject(StarWarsInfoService);

    public starship?: StarshipDTO;
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
