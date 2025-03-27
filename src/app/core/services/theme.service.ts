import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

const THEMES = ["light", "dark"];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly document = inject(DOCUMENT);

  private currentTheme = signal<string>('light');

  constructor() {
    this.currentTheme.set(localStorage.getItem("preferred-theme") ?? 'light');

    effect(() => {
      const theme = this.currentTheme();
      if (THEMES.includes(theme)) {
        this.document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("preferred-theme", theme);
      }
    })
  }

  public setTheme(theme: string): void {
    this.currentTheme.set(theme);
  }

  public get Theme(){
    return this.currentTheme();
  }

}
