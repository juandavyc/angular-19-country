import { Component, inject, linkedSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-by-capital-page',
  imports: [
    SearchInputComponent,
    TableListComponent,
  ],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',

})
export class ByCapitalPageComponent {

  private countryService = inject(CountryService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  public query = linkedSignal({
    source: () => this.activatedRoute.snapshot.queryParamMap.get('query'),
    computation: (source: string | null) => {
      return source ?? '';
    }
  });

  public countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);
      this.router.navigate(['country/by-capital'], {
        queryParams: {
          query: request.query
        }
      })
      return this.countryService.searchByCapital(request.query);
    }
  })


  // public isLoading = signal<boolean>(false);
  // public isError = signal<string | null>(null);

  // public countryList = signal<[]>([]);


  // public onSearch(value: string): void {
  //   if(this.isLoading()) return;

  //   this.isError.set(null);
  //   this.isLoading.set(true);
  //   this.countryService.searchByCapital(value)
  //     .subscribe({
  //       error: (err) => {
  //           this.isLoading.set(false)
  //           this.countries.set([]);
  //           this.isError.set(err)
  //       },
  //       next: (response) => {
  //         this.isLoading.set(false);
  //         this.countries.set(response)
  //       }
  //     });
  // }

}
