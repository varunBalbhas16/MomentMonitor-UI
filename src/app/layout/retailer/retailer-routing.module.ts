import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetailerlistComponent } from './retailerlist/retailerlist.component';
import { RetailerbatchdetailsComponent } from './retailerbatchdetails/retailerbatchdetails.component';
const routes: Routes = [
            {
                path: 'listmapdepartments',
                component: RetailerlistComponent,
            },
             {
                path: 'retailerbatchdetails/:id',
                component: RetailerbatchdetailsComponent,
            }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailerRoutingModule { }
