import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../components/atoms/input/input.component';
import { TextareaComponent } from '../components/atoms/textarea/textarea.component';
import { ButtonComponent } from '../components/atoms/button/button.component';

@NgModule({
  declarations: [
    InputComponent,
    TextareaComponent,
    ButtonComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }