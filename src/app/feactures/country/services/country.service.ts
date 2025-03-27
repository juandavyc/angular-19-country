import { inject, Injectable } from '@angular/core';

import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { Country, RESTCountry } from '../interfaces';
import { CountryMapper } from '../components/mappers/country.mapper';
import { Endpoint } from '../enums/endpoint.enum';
import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';



const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  private queryCache = {
    capital: new Map<string, Country[]>(),
    name: new Map<string, Country[]>(),
    region: new Map<string, Country[]>(),
    alpha: new Map<string, Country[]>(),
  };

  searchByCapital(query: string): Observable<Country[]> {
    return this.searchBy(Endpoint.Capital, query);
  }

  searchByCountry(query: string): Observable<Country[]> {
    return this.searchBy(Endpoint.Name, query);
  }

  searchByRegion(query: string): Observable<Country[]> {
    return this.searchBy(Endpoint.Region, query);
  }
  searchByAlphaCode(query: string): Observable<Country> {
    return this.searchBy(Endpoint.Alpha, query).pipe(
      map(([country]) => country)
    );
  }

  private searchBy(endpoint: Endpoint, query: string) {

    const queryLowerCase = query.toLocaleLowerCase();
    const cache = this.queryCache[endpoint];

    if (cache.has(query)) {
      return of(cache.get(query) ?? []);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/${endpoint}/${queryLowerCase}`)
      .pipe(
        delay(1000),
        map(countries => CountryMapper.restCountriesToCountries(countries)),
        tap(countries => cache.set(query, countries)),
        catchError(err => throwError(() => new Error(`An error ocurred: ${JSON.stringify(err)}`)))
      );
  }





}
