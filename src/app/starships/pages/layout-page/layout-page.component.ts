
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { NavigationBarComponent } from '../../../shared/components/navigation-bar/navigation-bar.component';


@Component({
    selector: 'starship-layout-page',
    standalone: true,
    imports: [ 
        BannerComponent,
        CommonModule, 
        NavigationBarComponent,
        RouterModule,
    ],
    templateUrl: './layout-page.component.html',
    styleUrl: './layout-page.component.scss',
})
export default class LayoutPageComponent {
}
