import { Routes } from '@angular/router';

export const  STARSHIP_ROUTES: Routes  = [
    {
        path: '',
        loadComponent: () => import('./pages/layout-page/layout-page.component')
    },
    {
        path: ':id',
        loadComponent: () => import('./pages/starship-page/starship-page.component')
    }
];
