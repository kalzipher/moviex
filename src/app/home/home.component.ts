import { Component, OnInit } from '@angular/core';
import { ResponseMovies } from '../interfaces';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'movie-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movies: ResponseMovies;
  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.initMovies();
    this.movieService.movies.subscribe((res:any) => {
      this.movies = res;
    });
  }

  private initMovies() {
    this.movieService.getMovies();
  }
}
