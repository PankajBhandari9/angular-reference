import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { LandingComponent } from './components/layouts/landing/landing.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, LandingComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, LandingComponent, FooterComponent],
})
export class CoreModule {}
