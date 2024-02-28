import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../../../shared/components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { StarWarsInfoService } from '../../services/star-wars-info.service';
import { UrlUtilsService } from '../../../utils/url-utils/url-utils.service';
import { Starship } from '../../interfaces/starship.interface';
import { map, tap } from 'rxjs';

@Component({
    selector: 'starship-layout-page',
    standalone: true,
    imports: [ 
        CommonModule, 
        RouterModule,
        NavigationBarComponent
    ],
    templateUrl: './layout-page.component.html',
    styleUrl: './layout-page.component.scss',
})
export default class LayoutPageComponent {
}
