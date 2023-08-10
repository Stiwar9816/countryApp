import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CacheStore, Country, Region } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] as Country[] },
    byCountries: { term: '', countries: [] as Country[] },
    byRegion: { region: '', countries: [] as Country[] },
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountryRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError((error) => of([])));
  }

  searchCountryByAlphacode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }

  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;
    return this.getCountryRequest(url).pipe(
      tap(
        (countries) => (this.cacheStore.byCapital = { term: query, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByRegion(query: Region): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${query}`;
    return this.getCountryRequest(url).pipe(
      tap(
        (countries) => (this.cacheStore.byRegion = { region: query, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;
    return this.getCountryRequest(url).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountries = { term: query, countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }
}
