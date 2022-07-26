import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponseMovies, MovieDetail } from '@models/movie';
import { environment as env } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public readonly movies: Subject<ResponseMovies> =
    new Subject<ResponseMovies>();

  constructor(private readonly http: HttpClient) {}

  public getMovies(): void {
    this.http
      .get<ResponseMovies>(env.apiMovies)
      .pipe(map(this.addUrlImage))
      .subscribe({
        next: (res) => {
          this.movies.next(res);
        },
      });
  }

  public getMoviesByCategory(category: string) {
    const urlApi: string = env.apiMovie + category;
    this.http
      .get<ResponseMovies>(urlApi)
      .pipe(map(this.addUrlImage))
      .subscribe((res) => {
        this.movies.next(res);
      });
  }

  public getMovieById(id: number): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`${env.apiMovie}/${id}`).pipe(
      map((movie) => {
        movie.poster_path = env.baseUrlImage + movie.poster_path;
        movie.backdrop_path = env.baseUrlBackdropPoster + movie.backdrop_path;
        return movie;
      })
    );
  }

  private addUrlImage(m: ResponseMovies) {
    m.results = m.results.map((movie) => {
      movie.poster_path = env.baseUrlImage + movie.poster_path;
      return movie;
    });
    return m;
  }
}
