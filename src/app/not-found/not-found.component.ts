import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories/categories.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private readonly categoryService: CategoriesService) {}

  ngOnInit(): void {}
}
