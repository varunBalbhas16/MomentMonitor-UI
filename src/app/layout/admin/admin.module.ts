import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule,FormBuilder, FormGroup, Validators , NgForm}   from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule,MatStepperModule} from '@angular/material';

import { AddentityComponent } from './addentity/addentity.component';
import { ListentityComponent } from './listentity/listentity.component';
import { EditentityComponent } from './editentity/editentity.component';
import { AddzoneComponent } from './addzone/addzone.component';
import { EditzoneComponent } from './editzone/editzone.component';
import { ListzoneComponent } from './listzone/listzone.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { EditdepartmentComponent } from './editdepartment/editdepartment.component';
import { ListdepartmentComponent } from './listdepartment/listdepartment.component';
import { AddcenterComponent } from './addcenter/addcenter.component';
import { ListcentreComponent} from './listcentre/listcentre.component';
import { AddprogramComponent } from './addprogram/addprogram.component';
import { ActiveprogramlistComponent } from './activeprogramlist/activeprogramlist.component';
import { ProgramlistComponent } from './programlist/programlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditprogramComponent } from './editprogram/editprogram.component';
import { AddprogramformComponent } from './addprogramform/addprogramform.component';
import { ProfileComponent } from './profile/profile.component';
import { RaiseticketComponent } from './raiseticket/raiseticket.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { FieldtriplistComponent } from './fieldtriplist/fieldtriplist.component';
import { AttendancelistComponent } from './attendancelist/attendancelist.component';

@NgModule({
  declarations: [AdminComponent, AdduserComponent, UserlistComponent, AddentityComponent, ListentityComponent, EditentityComponent,
                  AddzoneComponent, ListzoneComponent, EditzoneComponent, AddcenterComponent, ListcentreComponent, AdddepartmentComponent, EditdepartmentComponent, ListdepartmentComponent, AddprogramComponent,
                  ActiveprogramlistComponent, ProgramlistComponent, EdituserComponent, EditprogramComponent, AddprogramformComponent, ProfileComponent, RaiseticketComponent,TicketlistComponent
                  ,AttendancelistComponent ,FieldtriplistComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatInputModule, MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonToggleModule, MatDialogModule, MatTooltipModule, MatStepperModule,
    
	AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }
