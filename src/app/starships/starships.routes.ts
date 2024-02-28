import { Routes } from '@angular/router';

export const  STARSHIP_ROUTES: Routes  = [
    {
        path: '',
        loadComponent: () => import('./pages/starship-list-page/starship-list-page.component')
    },
    {
        path: ':id',
        loadComponent: () => import('./pages/starship-page/starship-page.component')
    }
];
