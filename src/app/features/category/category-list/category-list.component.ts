import { Component, OnInit, inject } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  pageSize: number = 5;

  private readonly categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(page: number = 0): void {
    this.categoryService.getCategories(page, this.pageSize, true).subscribe({
      next: (data) => {
        this.categories = data.content;
        this.totalPages = data.totalPages;
        this.currentPage = data.pageNumber;
      },
      error: (error) => console.error(error)
    });
  }

  changePage(page: number): void {
    this.loadCategories(page);
  }
}
