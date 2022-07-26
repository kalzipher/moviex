import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { Movie } from '@models/movie';
import { faEye, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'movie-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @ViewChild('movieCard', { static: true }) movieElement!: ElementRef;
  @Input() public movie!: Movie;

  public readonly faEyeIcon: IconDefinition = faEye;
  constructor(private readonly renderer2: Renderer2) {}

  ngOnInit() {}
  public lodadedImage() {
    this.renderer2.addClass(this.movieElement.nativeElement, 'loaded');
  }
}
