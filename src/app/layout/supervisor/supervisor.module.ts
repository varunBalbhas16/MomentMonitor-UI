import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule,FormBuilder, FormGroup, Validators , NgForm}   from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule} from '@angular/material';
import { SupervisorRoutingModule } from './supervisor-routing.module';
import { SupervisorComponent } from './supervisor.component';
import { SupervisorlistComponent,DialogOverviewExampleDialog } from './supervisorlist/supervisorlist.component';
import { SupervisorpageComponent } from './supervisorpage/supervisorpage.component';
import { SupervisorbatchdetailsComponent } from './supervisorbatchdetails/supervisorbatchdetails.component';
import { ListofagentComponent } from './listofagent/listofagent.component';
@NgModule({
  declarations: [SupervisorComponent, SupervisorlistComponent, SupervisorpageComponent,DialogOverviewExampleDialog, SupervisorbatchdetailsComponent, ListofagentComponent],
  imports: [
    CommonModule,
    SupervisorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule
  ],
    entryComponents: [SupervisorlistComponent, DialogOverviewExampleDialog],
    exports: [
        SupervisorlistComponent
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SupervisorModule { }
