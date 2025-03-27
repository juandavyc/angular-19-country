import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { NavbarRoute } from './interfaces/navbar-route.interface';


@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css',
})
export class AppNavbarComponent {



  get navbarRoutes(): NavbarRoute[] {
    return routes.filter(route => route.data && route.data['show'])
      .map(route => ({
        title: route.data!['title'],
        path: route.path || '/',
      }));
  }


}
