import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddentityComponent } from './addentity/addentity.component';
import { ListentityComponent } from './listentity/listentity.component';
import { EditentityComponent } from './editentity/editentity.component';
import { AddprogramComponent } from './addprogram/addprogram.component';
import { ActiveprogramlistComponent } from './activeprogramlist/activeprogramlist.component';
import { EditprogramComponent } from './editprogram/editprogram.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ProgramlistComponent } from './programlist/programlist.component';
import { AddprogramformComponent } from './addprogramform/addprogramform.component';
import { ProfileComponent } from './profile/profile.component';
import { AddzoneComponent } from './addzone/addzone.component';
import { EditzoneComponent } from './editzone/editzone.component';
import { ListzoneComponent } from './listzone/listzone.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { EditdepartmentComponent } from './editdepartment/editdepartment.component';
import {ListdepartmentComponent} from './listdepartment/listdepartment.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { ListcentreComponent} from './listcentre/listcentre.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { FieldtriplistComponent } from './fieldtriplist/fieldtriplist.component';
import { AttendancelistComponent } from './attendancelist/attendancelist.component';

const routes: Routes = [
            {
                path: 'adduser',
                component: AdduserComponent,
            },
            {
                path: 'userlist',
                component: UserlistComponent,
            },
            {
                path: 'addentity',
                component: AddentityComponent,
            },
            {
                path: 'listentity',
                component: ListentityComponent,
            },
            {
              path: 'addzone',
              component: AddzoneComponent,
            },
            {
              path: 'editzone/:id',
              component: EditzoneComponent,
            },
            {
              path: 'listzone',
              component: ListzoneComponent,
            },
            {
              path: 'adddepartment',
              component: AdddepartmentComponent,
            },
            {
              path: 'editdepartment/:id',
              component: EditdepartmentComponent,
            },
            {
              path: 'listdepartment',
              component: ListdepartmentComponent,
            },
            {
              path: 'addcenter',
              component: AddcenterComponent,
            },
            {
              path: 'listcentre',
              component: ListcentreComponent,
            },
            {
                path: 'editentity/:id',
                component: EditentityComponent,
            },
            {
                path: 'addprogram',
                component: AddprogramComponent,
            },
            {
                path: 'activeprogramlist',
                component: ActiveprogramlistComponent,
            },
            {
                path: 'programlist',
                component: ProgramlistComponent,
            },
            {
                path: 'editprogram/:id',
                component: EditprogramComponent,
            },
            {
                path: 'edituser/:id',
                component: EdituserComponent,
            },
            {
                path: 'addprogramform/:id',
                component: AddprogramformComponent,
            },
            {
              path: 'raiseticket',
              component: RaiseticketComponent,
            },
            {
              path: 'ticketlist',
              component: TicketlistComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            },
            {
              path: 'fieldtriplist',
              component: FieldtriplistComponent,
            },
			{
              path: 'attendancelist',
              component: AttendancelistComponent,
            },
            ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
