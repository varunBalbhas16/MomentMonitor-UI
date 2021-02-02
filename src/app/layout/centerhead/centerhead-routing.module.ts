import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListmapdepartmentsComponent } from './listmapdepartments/listmapdepartments.component';
import { MapdepartmentComponent } from './mapdepartment/mapdepartment.component';
import {MapdpmComponent} from './mapdpm/mapdpm.component';

const routes: Routes = [
            {
              path: 'mapdepartment',
              component: MapdepartmentComponent,
            },
            {
                path: 'listmapdepartments',
                component: ListmapdepartmentsComponent,
            },
            {
              path: 'mapdpm',
              component: MapdpmComponent,
            },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterheadRoutingModule { }
