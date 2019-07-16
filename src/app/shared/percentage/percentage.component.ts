import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'movie-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.scss']
})
export class PercentageComponent implements OnInit, OnChanges {

  @ViewChild('wrapper', { static: true }) wrapElement: ElementRef;
  @Input() public percent: number;
  public canAnimated: boolean = false;
  public size: string = '0, 100';

  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
  }
  ngOnChanges(simpleChanges: SimpleChanges) {
    this.vertifySvgInit();
  }
  private vertifySvgInit() {
    const el: HTMLElement = this.wrapElement.nativeElement;
    if (el.classList.contains('activated')) {
      setTimeout(() => {
        this.size = `${this.percent}, 100`;
        this.canAnimated = true;
      }, 2175);
    }
  }
  public isNumber(num: number): boolean {
    return !isNaN(num);
  }
  public getStatus(): string {
    if (this.percent < 30) {
      return 'danger';
    } else if (this.percent >= 30 && this.percent < 70) {
      return 'warning';
    } else {
      return 'success';
    }
  }
}
