import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { CountryLayoutComponent } from './layouts/country-layout/country-layout.component';
import { CountryPageComponent } from './country-page.component';

export const countryRoutes: Routes = [
  // {
  //   path: '',
  //   component: CountryPageComponent,
  // },
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        title: 'capital',
        component: ByCapitalPageComponent,
      },
      {
        path: 'by-country',
        title: 'country',
       loadComponent: ()=> import('./pages/by-country/by-country.component')
      },
      {
        path: 'by-region',
        title: 'region',
        loadComponent: ()=> import('./pages/by-region/by-region.component')
      },
      {
        path: 'by/:code',
        loadComponent: ()=> import('./pages/country-page/country-page.component')
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }

]

//export default countryRoutes;
