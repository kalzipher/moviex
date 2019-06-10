import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'movie-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnChanges {

  public rating:any[] = new Array(10).fill(1);
  constructor() { }

  public range: string = '';
  @Input('runtime') runtime:number;
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.range = changes.runtime.currentValue as string;
  }
}
