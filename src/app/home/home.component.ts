import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseMovies } from '@models/movie';
import { MoviesService } from '@services/movies/movies.service';

@Component({
  selector: 'movie-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public movies$!: Observable<ResponseMovies>;
  public searcher: string = '';
  constructor(private readonly movieService: MoviesService) {}

  ngOnInit() {
    this.movies$ = this.movieService.movies;
    this.initMovies();
  }

  private initMovies() {
    this.movieService.getMovies();
  }
  public onSearched($event: string) {
    this.searcher = $event;
  }
}
