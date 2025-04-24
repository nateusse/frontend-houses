import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/models/services/category.service';
import { Category } from '../../models/category';
import { Observable, subscribeOn } from 'rxjs';
import { PageDto } from 'src/app/shared/models/pageDto';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  // Put private propiertes 

  PageDto!: Observable<PageDto<Category>>; // no iniciar, viene del servicio ?opcional ! ten fe , poner any no

  categoriesList: Category[] = [];

  page = 0;
  size = 5;
  totalPages = 1;
  pages: number[] = [];

  //Create with @Inject, no with dependency inyection 
  //ngOinit ponerle el contructor 
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void { 
    //this.getCategories();
    //lamar al 2, para no usar observable sino async
    this.getCategories2();
  }
  
  getCategories(): void {
    // pipe asynch isntead o subscrib
    this.categoryService.getCategories(this.page, this.size, true).subscribe({
      next: (data) => {
        this.categoriesList = data.content;
        this.totalPages = data.totalPages;
       // this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
      },
      error: (error: unknown) => {
        if (error instanceof Error) {
          console.error('Error fetching categories:', error.message);
        } else {
          console.error('Error fetching categories:', error);
        }
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

   getCategories2(): void {
    this.PageDto = this.categoryService.getCategories(this.page, this.size, true) ;
   
   }

}