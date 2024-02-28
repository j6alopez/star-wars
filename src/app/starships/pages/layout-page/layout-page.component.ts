import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../../../shared/components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { StarWarsInfoService } from '../../services/star-wars-info.service';
import { UrlUtilsService } from '../../../utils/url-utils/url-utils.service';
import { Starship } from '../../interfaces/starship.interface';
import { map, tap } from 'rxjs';

@Component({
    selector: 'app-layout-page',
    standalone: true,
    imports: [ 
        CommonModule, 
        RouterModule,
        NavigationBarComponent
    ],
    templateUrl: './layout-page.component.html',
    styleUrl: './layout-page.component.scss',
})
export default class LayoutPageComponent implements OnInit {
    public starships: Starship[] = [];
    private currentPage: number = 1;
    public nextPage!: number | null;

    constructor(private starshipsService: StarWarsInfoService) {}

    ngOnInit(): void {
        this.addStarShipsToList();
    }

    getStarShipId(url: string): string {
        return UrlUtilsService.extractStarShipIdFromSwApi(url);
    }
    
    addStarShipsToList(): void {
        this.starshipsService.getStarshipsWithPagination(this.currentPage)
            .pipe(
                tap(({ next }) => this.setNextPage(next)),
                map( ({ results }) => { 
                    return results.map( ({ model, name, url }) => ({model, name, url }) as Starship) // transform emmited values
                })
            ) 
            .subscribe( (data) => {
                this.starships.push(...data);
            });
    }

    private setNextPage( nextPage: string | null): void {
        const isLastPage = nextPage === null;
        if (isLastPage) {
            this.nextPage = nextPage;
            return;
        }
        const next = UrlUtilsService.extractParameterFromUrl( nextPage, 'page');
        if( next ) {
            this.currentPage = this.currentPage + 1;
            this.nextPage = Number.parseInt(next!);
        }
    }

}
