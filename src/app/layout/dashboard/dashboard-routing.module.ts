import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { SchooladmindashboardComponent } from './schooladmindashboard/schooladmindashboard.component';
import { RetailerdashboardComponent } from './retailerdashboard/retailerdashboard.component';
const routes: Routes = [
            {
              path: '',
               component: DashboardComponent,
            },
            {
                path: 'admindashboard',
                component: AdmindashboardComponent,
            },
            {
                path: 'schooladmindashboard',
                component: SchooladmindashboardComponent,
            },
            {
                path: 'retailerdashboard',
                component: RetailerdashboardComponent,
            }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
