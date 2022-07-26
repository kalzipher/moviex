import { NgModule } from '@angular/core';

import { LazyLoadDirective } from './lazy-load.directive';

@NgModule({
  declarations: [LazyLoadDirective],
  exports: [LazyLoadDirective],
})
export class LazyLoadModule {}
