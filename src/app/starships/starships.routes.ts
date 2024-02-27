import { Routes } from '@angular/router';
import { StarShipPageComponent } from './pages/starship-page/starship-page.component';
import LayoutPageComponent from './pages/layout-page/layout-page.component';

export const  STARSHIP_ROUTES: Routes  = [
    {
        path: '',
        component: LayoutPageComponent
    },
    {
        path: ':id',
        component: StarShipPageComponent
    }
];
