import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { NavigationBarComponent } from '../../../shared/components/navigation-bar/navigation-bar.component';
import { Starship } from '../../interfaces/starships.interface';
import { StarWarsInfoService } from '../../services/star-wars-info.service';
import { UrlUtilsService } from '../../../utils/url-utils/url-utils.service';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [
    CommonModule,
    NavigationBarComponent,
    RouterModule
  ],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss',
})
export default class LayoutPageComponent implements OnInit {
  public starships: Starship[] = [];

  constructor(private starshipsService: StarWarsInfoService) {}

  ngOnInit(): void {
    this.starshipsService.getStarships().subscribe((data) => {
      this.starships = data.results;
    });
  }

  getStarShipId(url: string): string {
    const id: string = UrlUtilsService.extractStarShipIdFromSwApi(url);
    return id;
  }

}
