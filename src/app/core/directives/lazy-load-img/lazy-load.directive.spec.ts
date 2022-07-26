import { LazyLoadDirective } from './lazy-load.directive';

describe('LazyLoadDirective', () => {
  it('should create an instance', () => {
    const img: any = new Image();
    const directive = new LazyLoadDirective(img);
    expect(directive).toBeTruthy();
  });
});
