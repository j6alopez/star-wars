import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../../../shared/components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { Starship } from '../../interfaces/starship.interface';
import { StarWarsInfoService } from '../../services/star-wars-info.service';
import { UrlUtilsService } from '../../../utils/url-utils/url-utils.service';

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
        this.starshipsService.getStarshipsWithPagination(this.currentPage)
            .subscribe((data) => {
                this.starships = data.results;
                this.setNextPage(data.next);
            });
    }

    getStarShipId(url: string): string {
        const id: string = UrlUtilsService.extractStarShipIdFromSwApi(url);
        return id;
    }
    
    loadStarShips() {
        this.starshipsService.getStarshipsWithPagination(this.currentPage)
            .subscribe((data) => {
                this.starships = data.results;
                this.setNextPage(data.next);
            });
    }

    private setNextPage(next: string | null): void {
        const isLastPage = next === null;
        if (isLastPage) {
            return;
        }
        this.currentPage = this.nextPage!;
        this.nextPage = Number.parseInt(next!);
    }


}
