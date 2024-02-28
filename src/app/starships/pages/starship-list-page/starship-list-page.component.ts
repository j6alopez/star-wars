import { Component, OnInit } from '@angular/core';
import { Starship } from '../../interfaces/starship.interface';
import { StarWarsInfoService } from '../../services/star-wars-info.service';
import { UrlUtilsService } from '../../../utils/url-utils/url-utils.service';
import { map, tap } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'starship-list-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './starship-list-page.component.html',
  styleUrl: './starship-list-page.component.scss'
})
export default class StarShipListPageComponent implements OnInit {

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