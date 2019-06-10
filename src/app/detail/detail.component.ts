import { Component, OnInit, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MovieDeatil, Genrer } from '../interfaces';
import { MovieService } from './../services/movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @ViewChild('containerPoster', { static:true }) containerPoster: ElementRef;
  @ViewChild('moviePoster', { static:true }) moviePoster: ElementRef;
  @ViewChild('poster', { static:true }) poster:ElementRef;
  @ViewChild('title', { static:true }) title:ElementRef;
  @ViewChild('overview', { static:true }) overview:ElementRef;
  @ViewChild('listGenres', { static:true }) listGenres: ElementRef;
  @ViewChild('release', { static:true }) release: ElementRef;
  @ViewChild('totalVote', { static:true }) totalVote: ElementRef;
  @ViewChild('status', { static:true }) status:ElementRef;

  @HostListener('window:scroll', ['$event']) private onScroll(event:Event): void {
    const el = this.moviePoster.nativeElement as HTMLElement;
    const top: number = el.getBoundingClientRect().top;
    console.log('top', top);
    console.log('distance', this.distance);
    if(top <= this.distance) {
      this.renderer2.addClass(this.containerPoster.nativeElement, 'down');
    } else {
      this.renderer2.removeClass(this.containerPoster.nativeElement, 'down');
    }
  }

  public iconBack = faArrowLeft;
  public movie: MovieDeatil;
  public isActive: Boolean = false;
  private distance: number;

  constructor(
    private activatedRoute:ActivatedRoute,
    private movieService:MovieService,
    private renderer2:Renderer2
  ) { }

  ngOnInit() {
    this.topGoTop();
    this.getParams();
    this.getDistance();
  }
  private getDistance():void {
    const el:HTMLElement = this.poster.nativeElement as HTMLElement;
    this.distance = Math.round(el.getBoundingClientRect().height / 2.1);
  }
  private topGoTop() {
    window.scrollTo(0, 0);
  }
  private getParams() {
    this.activatedRoute.params.subscribe(param => {
      this.getMovieById(param.id);
    });
  }
  private getMovieById(id:number): void {
    this.movieService.getMovieById(id).subscribe(movie => {
      this.movie = movie as MovieDeatil;
      console.log(this.movie)
    });
  }
  public onLoad() {
    this.renderer2.addClass(this.moviePoster.nativeElement, 'active');
    this.renderer2.addClass(this.poster.nativeElement, 'active');
    this.renderer2.addClass(this.title.nativeElement, 'active');
    this.renderer2.addClass(this.overview.nativeElement, 'active');
    this.intersectionObserverGenres(this.listGenres);
    this.intersectionObserverGenres(this.release);
    this.intersectionObserverGenres(this.totalVote);
    this.intersectionObserverGenres(this.status);
  }
  public intersectionObserverGenres(element: ElementRef) {
    if(window && 'IntersectionObserver' in window) {
      const observerList:IntersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            this.renderer2.addClass(element.nativeElement, 'active');
            observerList.disconnect();
          }
        });
      }, { threshold: .5 });
      observerList.observe(element.nativeElement);
    } else {
      this.renderer2.addClass(element.nativeElement, 'active');
    }
  }
}
