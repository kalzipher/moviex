import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, Output, EventEmitter, HostListener } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'movie-poster-backdrop',
  templateUrl: './poster-backdrop.component.html',
  styleUrls: ['./poster-backdrop.component.scss']
})
export class PosterBackdropComponent implements OnInit {

  public iconBack = faArrowLeft;
  public isDown: boolean = false;
  @Input('backUrl') url: string = '/';
  @Input('backdropPath') backdrop_path: string = '';
  @Output() onloaded: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('containerPoster', { static: true }) containerPoster: ElementRef;
  @ViewChild('poster', { static: true }) poster: ElementRef;

  @HostListener('window:scroll', ['$event']) private onScroll($event: Event): void {
    const el = this.containerPoster.nativeElement as HTMLElement
    const distance: number = Math.round((el.getBoundingClientRect().height / 100) * 25);
    console.log(window.scrollY, distance);
    if (window.scrollY > distance) {
      this.isDown = true;
      console.log(this.isDown)
    } else {
      this.isDown = false;
    }
  };

  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
  }

  public onLoad() {
    this.renderer2.addClass(this.poster.nativeElement, 'active');
    this.onloaded.emit(true);
  }
}
