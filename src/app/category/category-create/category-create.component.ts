import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent {
  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(90)]],
    });
  }

  onSubmit(): void {
    if (this.categoryForm.invalid) return;

    const newCategory: Category = {
      name: this.categoryForm.value.name.trim(),
      description: this.categoryForm.value.description.trim()
    };

    console.log('Categoría a crear:', newCategory);

    this.categoryForm.reset();
  }
}
