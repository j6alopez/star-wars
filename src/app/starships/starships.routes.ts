import { Routes } from '@angular/router';
import StarShipPageComponent from './pages/starship-page/starship-page.component';
import StarShipListPageComponent from './pages/starship-list-page/starship-list-page.component';
import LayoutPageComponent from './pages/layout-page/layout-page.component';
import { authGuard } from '../auth/guards/auth-guard.guard';

export const STARSHIP_ROUTES: Routes = [
    {
      path: '',
      component: LayoutPageComponent,
      canActivate: [ authGuard ],
      children: [
            { path: '', component: StarShipListPageComponent },
            { path: ':id', component: StarShipPageComponent },
            { path: '**', redirectTo: 'starships' },
        ],
    },
];
