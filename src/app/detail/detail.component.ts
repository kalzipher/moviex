import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDetail } from '@models/movie';
import { MoviesService } from '@services/movies/movies.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @ViewChild('poster', { static: true }) poster!: ElementRef;
  @ViewChild('title', { static: true }) title!: ElementRef;
  @ViewChild('overview', { static: true }) overview!: ElementRef;
  @ViewChild('listGenres', { static: true }) listGenres!: ElementRef;
  @ViewChild('release', { static: true }) release!: ElementRef;
  @ViewChild('totalVote', { static: true }) totalVote!: ElementRef;
  @ViewChild('status', { static: true }) status!: ElementRef;
  @ViewChild('budget', { static: true }) budget!: ElementRef;
  // @ViewChild('revenue', { static: true }) revenue: ElementRef;
  @ViewChild('runtime', { static: true }) runtime!: ElementRef;

  public onloadedPosterBack: boolean = false;
  public backUrl: string = '/';
  public movie!: MovieDetail;
  public isActive: Boolean = false;
  public loaded: boolean = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly moviesService: MoviesService,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    this.topGoTop();
    this.getParams();
  }
  private topGoTop() {
    window.scrollTo(0, 0);
  }
  private getParams() {
    this.activatedRoute.params.subscribe((param: Params) => {
      this.getMovieById(param['id']);
    });
  }
  private getMovieById(id: number): void {
    this.moviesService.getMovieById(id).subscribe((movie) => {
      this.movie = movie;
    });
  }
  public onLoad(isLoadedBackPoaster: boolean) {
    this.onloadedPosterBack = isLoadedBackPoaster;
    this.renderer2.addClass(this.title.nativeElement, 'active');
    this.renderer2.addClass(this.overview.nativeElement, 'active');
    this.intersectionObserverGenres(this.listGenres);
    this.intersectionObserverGenres(this.release);
    this.intersectionObserverGenres(this.totalVote);
    this.intersectionObserverGenres(this.status);
    this.intersectionObserverGenres(this.budget);
    // this.intersectionObserverGenres(this.revenue);
    this.intersectionObserverGenres(this.runtime);
  }

  public intersectionObserverGenres(element: ElementRef) {
    if (window && 'IntersectionObserver' in window) {
      const observerList: IntersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.renderer2.addClass(element.nativeElement, 'active');
              observerList.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );
      observerList.observe(element.nativeElement);
    } else {
      this.renderer2.addClass(element.nativeElement, 'active');
    }
  }
}
