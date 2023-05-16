import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptors } from './interceptors';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [HttpInterceptors],
})
export class SharedModule {}
