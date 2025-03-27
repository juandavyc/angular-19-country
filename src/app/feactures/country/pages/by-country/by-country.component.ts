import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, linkedSignal, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map, of } from 'rxjs';
import { CountryService } from '../../services/country.service';
@Component({
  selector: 'app-by-country',
  imports: [
    SearchInputComponent,
    TableListComponent,
  ],
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.css',
})
export default class ByCountryComponent {

  private countryService = inject(CountryService);
  private activatedRoute = inject(ActivatedRoute);

  private router = inject(Router);


  private queryRouter = toSignal(
    this.activatedRoute.queryParamMap.pipe(
      map(param => param.get('query') ?? '')
    ), { initialValue: '' }
  );


  public query = linkedSignal({
    source: () => this.queryRouter(),
    computation: (source: string | null) => source ?? ''
  });

  public countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: request.query
        }
      })
      return this.countryService.searchByCountry(request.query);
    }
  });


  public onSearch(value: string): void {
    console.log(value);
  }

}
