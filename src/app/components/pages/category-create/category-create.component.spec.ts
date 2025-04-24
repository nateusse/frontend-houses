import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryCreateComponent } from './category-create.component';

describe('CategoryCreateComponent', () => {
  let component: CategoryCreateComponent;
  let fixture: ComponentFixture<CategoryCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryCreateComponent],
      imports: [ReactiveFormsModule]
    });

    fixture = TestBed.createComponent(CategoryCreateComponent); 
    component = fixture.componentInstance;                     
    fixture.detectChanges();                                  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
