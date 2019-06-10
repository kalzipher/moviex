import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { SearchPipe } from './pipes/search.pipe';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { RatingComponent } from './rating/rating.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    SearchPipe,
    LazyLoadDirective,
    RatingComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent,
    MenuComponent,
    SearchPipe,
    LazyLoadDirective,
    FontAwesomeModule,
    RatingComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
