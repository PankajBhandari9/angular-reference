import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateProfileComponent } from './components/forms/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';
import { HttpInterceptors } from '../shared/interceptors';

@NgModule({
  declarations: [CreateProfileComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ProfileRoutingModule],
  providers: [ProfileService, HttpInterceptors],
})
export class ProfileModule {}
