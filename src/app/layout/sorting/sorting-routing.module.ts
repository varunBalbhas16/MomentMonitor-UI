import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { SortingclothesComponent } from './sortingclothes/sortingclothes.component';
import { SystemdetailsComponent } from './systemdetails/systemdetails.component';
import { RetailersortingclothesComponent } from './retailersortingclothes/retailersortingclothes.component';
const routes: Routes = [
            {
                path: 'studentdetails',
                component: StudentdetailsComponent,
            },
            {
                path: 'sortingclothes',
                component: SortingclothesComponent,
            },
             {
                path: 'retailersortingclothes',
                component: RetailersortingclothesComponent,
            },
            {
                path: 'systemdetails',
                component: SystemdetailsComponent,
            },            
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortingRoutingModule { }
