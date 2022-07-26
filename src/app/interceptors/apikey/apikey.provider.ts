import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { ApikeyInterceptor } from './apikey.interceptor';

export const API_KEY_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApikeyInterceptor,
  multi: true,
};
