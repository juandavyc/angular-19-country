import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { AppFooterComponent } from './shared/components/app-footer/app-footer.component';
import { AppNavbarComponent } from './shared/app-navbar/app-navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,

    // components
    AppNavbarComponent,
    AppFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'country-app';


}
