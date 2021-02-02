import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'layout'
            },
            {
                path: 'layout',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule'
            },
            {
                path: 'collecting',
                loadChildren: './collecting/collecting.module#CollectingModule'
            }
            ,
            {
                path: 'supervisor',
                loadChildren: './supervisor/supervisor.module#SupervisorModule'
            }
            ,
            {
                path: 'schooladmin',
                loadChildren: './schooladmin/schooladmin.module#SchooladminModule'
            }
            ,
            {
                path: 'sorting',
                loadChildren: './sorting/sorting.module#SortingModule'
            }
            ,
            {
                path: 'retailer',
                loadChildren: './retailer/retailer.module#RetailerModule'
            }
            ,
            {
              path: 'centerhead',
              loadChildren: './centerhead/centerhead.module#CenterheadModule'
            }
            ,
        ]
    }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
