import { Routes } from '@angular/router';
import StarShipPageComponent from './pages/starship-page/starship-page.component';
import StarShipListPageComponent from './pages/starship-list-page/starship-list-page.component';
import LayoutPageComponent from './pages/layout-page/layout-page.component';

export const  STARSHIP_ROUTES: Routes  = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: '', component: StarShipListPageComponent},
            { path: ':id', component: StarShipPageComponent},
            { path: '**', redirectTo: 'starships' },
        ]
    },
];
