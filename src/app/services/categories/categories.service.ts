import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';

import { Genrer, GenrerResponse } from '@models/genre';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private _genres: Genrer[] = [];

  constructor(private readonly http: HttpClient) {
    this.getAllGenres();
  }

  public get genres(): Genrer[] {
    return this.genres;
  }

  private getAllGenres(): void {
    this.http
      .get<GenrerResponse>(environment.apiGenres)
      .pipe(pluck('genres'))
      .subscribe({
        next: (res) => {
          this._genres = res;
        },
      });
  }
}
