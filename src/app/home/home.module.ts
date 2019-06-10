import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MoviesModule } from '../movies/movies.module';

@NgModule({
  declarations: [HomeRoutingModule.components],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    MoviesModule
  ]
})
export class HomeModule { }
