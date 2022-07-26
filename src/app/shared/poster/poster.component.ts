import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'movie-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
  public isLoadedPoster: boolean = false;
  @Input('loadedBackPoster') isLoaded: boolean = false;
  @Input('poster_movie') posterPath: string = '';
  @ViewChild('moviePoster', { static: true }) moviePoster!: ElementRef;

  constructor() {}

  ngOnInit() {}

  public onload() {
    this.isLoadedPoster = true;
  }
}
