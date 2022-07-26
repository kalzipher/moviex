import { TestBed } from '@angular/core/testing';

import { ApikeyInterceptor } from './apikey.interceptor';

describe('ApikeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApikeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApikeyInterceptor = TestBed.inject(ApikeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
