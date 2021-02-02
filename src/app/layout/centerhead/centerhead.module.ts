import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule,FormBuilder, FormGroup, Validators , NgForm}   from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule} from '@angular/material';
import { CenterheadRoutingModule } from './centerhead-routing.module';
import { CenterheadComponent } from './centerhead.component';
import { ListmapdepartmentsComponent } from './listmapdepartments/listmapdepartments.component';
import { MapdepartmentComponent } from './mapdepartment/mapdepartment.component';
import { MapdpmComponent } from './mapdpm/mapdpm.component';

@NgModule({
  declarations: [CenterheadComponent, ListmapdepartmentsComponent, MapdepartmentComponent, MapdpmComponent],
  imports: [
    CommonModule,
    CenterheadRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class CenterheadModule { }
