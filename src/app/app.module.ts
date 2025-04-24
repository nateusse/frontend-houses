import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './shared/models/services/category.module';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { FooterComponent } from './components/molecules/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CategoryModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
