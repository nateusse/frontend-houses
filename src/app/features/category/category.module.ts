import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from 'src/app/ui/organisms/navbar/navbar.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { FooterModule } from 'src/app/ui/organisms/footer/footer.module';


@NgModule({
  declarations: [
  CategoryListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarModule , 
    FooterModule
  ],
  exports: [
    CategoryListComponent
  ],
})
export class CategoryModule { }
