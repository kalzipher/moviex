import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@core/shared/shared.module';

import { DetailComponent } from './detail.component';

const routes: Routes = [{ path: '', component: DetailComponent }];

@NgModule({
  declarations: [DetailComponent],

  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DetailModule {}
