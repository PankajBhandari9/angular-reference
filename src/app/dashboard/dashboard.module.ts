import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileService } from '../profile/services/profile.service';
import { HttpInterceptors } from '../shared/interceptors';
import { HttpClientModule } from '@angular/common/http';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { DashboardExpDisplayComponent } from './components/dashboard-exp-display/dashboard-exp-display.component';
import { DashboardEduDisplayComponent } from './components/dashboard-edu-display/dashboard-edu-display.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

@NgModule({
  declarations: [DashboardComponent, DashboardActionComponent, DashboardExpDisplayComponent, DashboardEduDisplayComponent, UnauthorizedComponent],
  imports: [CommonModule, HttpClientModule, DashboardRoutingModule],
  providers: [ProfileService, HttpInterceptors],
})
export class DashboardModule {}
