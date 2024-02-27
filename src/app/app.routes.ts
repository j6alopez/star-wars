import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { StarshipPageComponent } from './starships/pages/starship-page/starship-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'starships',
    loadComponent: () =>
      import('./starships/pages/layout-page/layout-page.component'),
    children: [
        {
            path: ':id', 
            component: StarshipPageComponent
        }
    ]
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
