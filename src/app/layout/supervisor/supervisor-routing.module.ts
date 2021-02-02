import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorComponent } from './supervisor.component';
import { SupervisorlistComponent } from './supervisorlist/supervisorlist.component';
import { SupervisorpageComponent } from './supervisorpage/supervisorpage.component';
import { SupervisorbatchdetailsComponent } from './supervisorbatchdetails/supervisorbatchdetails.component';
import { ListofagentComponent } from './listofagent/listofagent.component';
const routes: Routes = [
            {
                path: 'supervisorpage',
                component: SupervisorpageComponent,
            },
            {
                path: 'supervisorlist',
                component: SupervisorlistComponent,
            },
            {
                path: 'supervisorbatchdetails/:id',
                component: SupervisorbatchdetailsComponent,
            },
            {
                path: 'listofagent',
                component: ListofagentComponent,
            }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule { }
