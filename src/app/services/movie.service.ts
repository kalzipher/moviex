import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { MovieDeatil, ResponseMovies, Genrer } from '../interfaces';
import { API_MOVIES, API_MOVIE_BY_ID, Api_GENRES, API_KEY, URL_IMAGE, URL_IMAGE_BACKDROP_POSTER } from '../api';
import { pluck, tap } from 'rxjs/operators';
import { API_MOVIE_CATEGORY } from './../api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private params: HttpParams = new HttpParams().set('api_key', API_KEY).set('language', 'es-CO');
  private _genres: Genrer[] = [];
  private _Movies: BehaviorSubject<Partial<ResponseMovies>> = new BehaviorSubject<ResponseMovies>(null);
  public movies: Observable<Partial<ResponseMovies>> = this._Movies.asObservable();
  constructor(private http: HttpClient) {
    this.getAllGenres();
  }

  public getMovies(): void {
    this.http.get<Partial<ResponseMovies>>(API_MOVIES, { params: this.params })
      .pipe(tap(this.addUrlImage))
      .subscribe(res => {
        this._Movies.next(res);
      });
  }
  public getMovieById(id: number): Observable<Partial<MovieDeatil>> {
    return this.http
      .get<MovieDeatil>(`${API_MOVIE_BY_ID}/${id}`, { params: this.params })
      .pipe(tap(movie => {
        movie.poster_path = URL_IMAGE + movie.poster_path;
        movie.backdrop_path = URL_IMAGE_BACKDROP_POSTER + movie.backdrop_path;
      }))
  }
  private getAllGenres(): void {
    const params: HttpParams = this.params.set('language', 'es-CO');
    this.http.get<Partial<Genrer[]>>(Api_GENRES, { params })
      .pipe(
        pluck('genres'),
      ).subscribe((res: Genrer[]) => {
        console.log(res);
        this._genres = res;
      });
  }
  public getMoviesByCategory(category: string) {
    let urlApi: string = '';
    if (category !== "/") {
      urlApi = API_MOVIE_CATEGORY + category;
    } else {
      urlApi = API_MOVIES;
    }
    this.http.get<Partial<ResponseMovies>>(urlApi, { params: this.params })
      .pipe(tap(this.addUrlImage))
      .subscribe(res => {
        this._Movies.next(res);
      });
  }
  get genres(): Genrer[] {
    return this._genres;
  }
  private addUrlImage(m: ResponseMovies) {
    m.results = m.results.map(movie => {
      movie.poster_path = URL_IMAGE + movie.poster_path;
      return movie;
    });
  }
}
