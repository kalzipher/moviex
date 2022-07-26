import { Component } from '@angular/core';
import { Category } from '@models/category';
import { MoviesService } from '@services/movies/movies.service';

@Component({
  selector: 'movie-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public search: string = '';
  public categories: Category[] = [
    { name: 'inicio', direction: '/', status: true },
    { name: 'proximanente', direction: '/upcoming', status: false },
    { name: 'Mas aclamado', direction: '/top_rated', status: false },
    { name: 'Mas polulares', direction: '/popular', status: false },
  ];
  constructor(private moviesService: MoviesService) {}

  public changeGenre(category: Category) {
    const index: number = this.categories
      .map((c) => c.direction)
      .indexOf(category.direction);
    this.categories = this.categories.map((x) => {
      if (x !== category) {
        x.status = false;
      }
      return x;
    });

    if (index >= 0) {
      window.scroll({
        behavior: 'smooth',
        top: 0,
        left: 0,
      });
      this.categories[index].status = !this.categories[index].status;
      this.moviesService.getMoviesByCategory(category.direction);
    }
  }
}
