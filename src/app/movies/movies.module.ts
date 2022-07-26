import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
