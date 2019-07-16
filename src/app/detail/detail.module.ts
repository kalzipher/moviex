import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: DetailComponent }
]

@NgModule({
  declarations: [DetailComponent],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailModule { }
