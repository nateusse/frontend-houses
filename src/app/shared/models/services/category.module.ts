import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCreateComponent } from '../../../components/pages/category-create/category-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryListComponent } from 'src/app/components/pages/category-list/category-list.component';


@NgModule({
  declarations: [CategoryCreateComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CategoryCreateComponent,
    CategoryListComponent
  ],
})
export class CategoryModule { }
