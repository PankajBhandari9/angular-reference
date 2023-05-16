import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminDashboardRoutingModule } from './super-admin-dashboard-routing.module';
import { SuperAdminComponent } from './components/super-admin/super-admin.component';


@NgModule({
  declarations: [
    SuperAdminComponent
  ],
  imports: [
    CommonModule,
    SuperAdminDashboardRoutingModule
  ]
})
export class SuperAdminDashboardModule { }
