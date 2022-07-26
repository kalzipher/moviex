import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { SearchPipe } from './pipes/search.pipe';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { RatingComponent } from './rating/rating.component';
import { FooterComponent } from './footer/footer.component';
import { PosterComponent } from './poster/poster.component';
import { PosterBackdropComponent } from './poster-backdrop/poster-backdrop.component';
import { PercentageComponent } from './percentage/percentage.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    SearchPipe,
    LazyLoadDirective,
    RatingComponent,
    FooterComponent,
    PosterComponent,
    PosterBackdropComponent,
    PercentageComponent,
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
  exports: [
    NavbarComponent,
    MenuComponent,
    SearchPipe,
    LazyLoadDirective,
    FontAwesomeModule,
    RatingComponent,
    FooterComponent,
    PosterComponent,
    PosterBackdropComponent,
    PercentageComponent,
  ],
})
export class SharedModule {}
