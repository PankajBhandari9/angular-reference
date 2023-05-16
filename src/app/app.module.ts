import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpInterceptors } from './shared/interceptors';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, UnauthorizedComponent, NotFoundComponent],
  imports: [BrowserModule, CoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
