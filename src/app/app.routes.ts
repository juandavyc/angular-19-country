import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [

  {
    path: '',
    data: { show: true, title: 'Home' },
    component: HomePageComponent,
  },
  {
    path: 'country',
    data: { show: true, title: 'Country' },
    loadChildren: () => import('./feactures/country/country.routes').then(m => m.countryRoutes)
  },
  {
    path: 'contact',
    data: { show: true, title: 'Contact' },
    loadComponent: () => import('./feactures/contact/contact-page/contact-page.component')
  },
  {
    path: '**',
    redirectTo: ''
  }

];
