import { Component, inject, linkedSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { NavbarRoute } from './interfaces/navbar-route.interface';
import { ThemeService } from '../../core/services/theme.service';


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

  private themeService = inject(ThemeService);

  public currentTheme = linkedSignal({
    source: () => this.themeService.Theme,
    computation: (source) => {
      return source == 'light'? true : false
    }
  })

  get navbarRoutes(): NavbarRoute[] {
    return routes.filter(route => route.data && route.data['show'])
      .map(route => ({
        title: route.data!['title'],
        path: route.path || '/',
      }));
  }

  public toggleTheme(theme: boolean) {
    this.themeService.toggleTheme(theme);
  }

}
