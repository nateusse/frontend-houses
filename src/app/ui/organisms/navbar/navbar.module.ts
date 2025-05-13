import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LogoComponent } from '../../atoms/logo/logo.component';



@NgModule({
  declarations: [ LogoComponent, NavbarComponent],
  imports: [
    CommonModule,
  ],
  exports: [NavbarComponent,  LogoComponent]    
})
export class NavbarModule { }
