import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'movie-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public search: string = '';
  public readonly iconSearch: IconDefinition = faSearch;
  @Output() searched: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public changedInput(): void {
    this.searched.emit(this.search);
  }
}
