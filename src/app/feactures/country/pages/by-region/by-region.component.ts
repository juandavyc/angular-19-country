import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { TitleCasePipe } from '@angular/common';


const REGIONS = ["europe", "americas", "asia", "africa", "oceania", "antarctic"];

@Component({
  selector: 'app-by-region',
  imports: [
    TitleCasePipe,
    TableListComponent,
  ],
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css',
})

export default class ByRegionComponent {

  private countryService = inject(CountryService);

  public query = signal<string>('');

  public readonly regions = signal<string[]>(REGIONS);

  public countryResource = rxResource({

    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      return this.countryService.searchByRegion(request.query);
    }
  });




}
