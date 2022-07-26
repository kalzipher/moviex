import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiKey: string = environment.apiKey;
    const language: string = environment.language;

    const cloneRequest: HttpRequest<any> = request.clone({
      setParams: {
        api_key: apiKey,
        language,
      },
    });

    return next.handle(cloneRequest);
  }
}
