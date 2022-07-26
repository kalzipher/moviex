import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeRoutingModule } from './home-routing.module';

import { SearchPipeModule } from '@core/pipes/search/search.module';
import { MoviesComponent } from './components/movies.component';

import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '@layout/layout.module';

@NgModule({
  declarations: [HomeRoutingModule.components, MoviesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,

    FontAwesomeModule,

    SearchPipeModule,
    SharedModule,
    LayoutModule,
  ],
})
export class HomeModule {}
