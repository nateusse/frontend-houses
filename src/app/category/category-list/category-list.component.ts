import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoriesList: Category[] = [];

  page: number = 0;
  size: number = 5;
  totalPages: number = 1;
  pages: number[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories(this.page, this.size, true).subscribe({
      next: (data) => {
        this.categoriesList = data.content;
        this.totalPages = data.totalPages;
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      },
      error: (error: any) => {
        console.error('Error fetching categories:', error);
      }
    });
  }

  goToPage(p: number): void {
    this.page = p;
    this.getCategories();
  }

  prevPage(): void {
    if (this.page > 0) {
      this.page--;
      this.getCategories();
    }
  }

  nextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.getCategories();
    }
  }
}