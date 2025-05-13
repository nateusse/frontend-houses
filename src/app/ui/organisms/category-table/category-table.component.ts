import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'] 
})
export class CategoryTableComponent {
  @Input() categories: Category[] = [];
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;

  @Output() pageChange = new EventEmitter<number>();
  @Output() deleteCategory = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index);
  }

  onPageChange(page: number): void {
    this.pageChange.emit(page);
  }

  onDelete(id: number): void {
    this.deleteCategory.emit(id);
  }
}
