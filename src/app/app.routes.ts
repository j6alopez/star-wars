import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import LayoutPageComponent from './starships/pages/layout-page/layout-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'starships',
    loadChildren: () => import ('./starships/starships.routes').then( r => r.STARSHIP_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/app.routes').then( r => r.AUTH_ROUTES)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
