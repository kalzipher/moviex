import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Movie } from './../interfaces';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'movie-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @ViewChild('movieCard', { static: true }) movieElement: ElementRef;
  @Input() public movie: Movie;

  public faEyeIcon = faEye;
  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
  }
  public lodadedImage() {
    this.renderer2.addClass(this.movieElement.nativeElement, 'loaded');
  }
}
