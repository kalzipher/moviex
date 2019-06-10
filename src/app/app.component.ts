import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './animations';

@Component({
  selector: 'movie-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fader ]
})
export class AppComponent {
  title = 'movie';
  public prepareRoute(outlet: RouterOutlet) {
    console.log(outlet);
    return outlet && (outlet.isActivated ? outlet.activatedRoute: '');
  }
}
