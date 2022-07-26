import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, MenuComponent],
  imports: [CommonModule, RouterModule, FormsModule, FontAwesomeModule],
  exports: [NavbarComponent, FooterComponent, MenuComponent],
})
export class LayoutModule {}
