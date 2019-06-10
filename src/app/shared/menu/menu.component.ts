import { Component, OnInit } from '@angular/core';
import { Category } from './../../interfaces';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'movie-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public search: string = '';
  public categories: Category[] = [
    { name: "inicio", direction:"", status: true },
    { name:"proximanente", direction:"upcoming", status:false },
    { name:"Mas aclamado", direction:"top_rated", status:false },
    { name:"Mas polulares", direction:"popular", status:false }
  ];
  constructor(
    private movieService:MovieService
  ) { }

  ngOnInit() {
  }
  public changeGenre(category: Category) {
    const index:number = this.categories.map(c => c.direction).indexOf(category.direction);
    this.categories = this.categories.map(x => {
      if(x != category) {
        x.status = false;
      }
      return x;
    });
    if(~index) {
      this.categories[index].status = !this.categories[index].status;
      this.movieService.getMoviesByCategory(`/${category.direction}`);
    }
  }

}
