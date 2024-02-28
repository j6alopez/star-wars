import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../../../shared/components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';

import { Component } from '@angular/core';


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
