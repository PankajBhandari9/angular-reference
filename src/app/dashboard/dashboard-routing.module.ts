import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedComponent } from '../components/unauthorized/unauthorized.component';
import { RoleGuard } from '../shared/guards/role.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'user-dashboard',
    loadChildren: () =>
      import('./user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashboardModule
      ),
    canActivate: [RoleGuard],
  },
  {
    path: 'super-admin-dashboard',
    loadChildren: () =>
      import('./super-admin-dashboard/super-admin-dashboard.module').then(
        (m) => m.SuperAdminDashboardModule
      ),
    canActivate: [RoleGuard],
  },
  {
    path: 'admin-dashboard',
    loadChildren: () =>
      import('./admin-dashboard/admin-dashboard.module').then(
        (m) => m.AdminDashboardModule
      ),
    canActivate: [RoleGuard],
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
