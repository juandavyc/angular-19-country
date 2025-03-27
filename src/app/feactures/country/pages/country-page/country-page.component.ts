import { ChangeDetectionStrategy, Component, inject, linkedSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-page',
  imports: [
    DecimalPipe
  ],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css',
})
export default class CountryPageComponent {

  private countryService = inject(CountryService);

  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  public countryCode = linkedSignal({
    source: () => this.activatedRoute.snapshot.paramMap.get('code'),
    computation: (source: string | null) => {
      if (!source?.trim()) {
        this.router.navigateByUrl("/country");
      };
      return source;
    }
  });

  public countryResource = rxResource({
    request: () => ({ alphaCode: this.countryCode() }),
    loader: ({ request }) => {
      if (!request.alphaCode?.trim()) this.router.navigateByUrl("/country");
      return this.countryService.searchByAlphaCode(request.alphaCode!);
    }

  })


}
