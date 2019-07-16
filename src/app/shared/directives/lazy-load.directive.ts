import { Directive, HostBinding, Input, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[movieLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit {

  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;
  constructor(
    private el: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.candLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private candLazyLoad(): boolean {
    return window && 'IntersectionObserver' in window;
  }
  private lazyLoadImage(): void {
    const obs: IntersectionObserver = new IntersectionObserver((entries: any[]) => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
          obs.disconnect();
        }
      }, { treshold: 0.5 })
    });
    obs.observe(this.el.nativeElement);
  }
  private loadImage(): void {
    this.srcAttr = this.src;
  }
}
