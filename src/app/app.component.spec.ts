import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CategoryModule } from './shared/models/services/category.module'; // 👈 agrega esto
import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  template: ''
})
class MockNavbarComponent {}

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      CategoryModule 
    ],
    declarations: [
      AppComponent,
      MockNavbarComponent 
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'frontend-houses'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend-houses');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent)
      .toContain('frontend-houses app is running!');
  });
});
