import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from './dashboard-resolver.service';
import { SharedModule } from '../shared';

const dashboardRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      isAuthenticated: DashboardResolver
    }
  }
]);

@NgModule({
  imports: [
    dashboardRouting,
    SharedModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    DashboardResolver
  ]
})
export class DashboardModule {}
