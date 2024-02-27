import { Routes } from '@angular/router';

export const STARSHIP_ROUTES: Routes  = [
    {
        path: '',
        loadComponent: () => import('./starships/pages/layout-page/layout-page.component'),
    },
    {
        path: '',
        redirectTo: 'starships',
        pathMatch: 'full'
    }
];
