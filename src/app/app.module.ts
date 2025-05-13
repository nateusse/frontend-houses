import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CategoryModule } from './features/category/category.module';
import {  HttpClientModule } from '@angular/common/http';
import { AvatarComponent } from './ui/atoms/avatar/avatar.component';



@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,


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
