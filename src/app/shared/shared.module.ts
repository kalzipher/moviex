import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingComponent } from './rating/rating.component';
import { PosterComponent } from './poster/poster.component';
import { PosterBackdropComponent } from './poster-backdrop/poster-backdrop.component';
import { PercentageComponent } from './percentage/percentage.component';

@NgModule({
  declarations: [
    RatingComponent,
    PosterComponent,
    PosterBackdropComponent,
    PercentageComponent,
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, RouterModule],
  exports: [
    FontAwesomeModule,
    RatingComponent,
    PosterComponent,
    PosterBackdropComponent,
    PercentageComponent,
  ],
})
export class SharedModule {}
