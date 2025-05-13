import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../atoms/icons/icon.component';
import { CategoryTableComponent } from './category-table.component';


@NgModule({
  declarations: 
  [IconComponent,
  CategoryTableComponent, 
  ],
  imports: [
    CommonModule
  ],
    exports: [ CategoryTableComponent ]
})
export class CategoryTableModule { }
