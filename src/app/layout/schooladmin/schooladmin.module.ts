import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule,FormBuilder, FormGroup, Validators , NgForm}   from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule} from '@angular/material';
import { SchooladminRoutingModule } from './schooladmin-routing.module';
import { SchooladminComponent } from './schooladmin.component';
import { SchooladminhistoryComponent } from './schooladminhistory/schooladminhistory.component';
import { StudenthistoryComponent } from './studenthistory/studenthistory.component';
import { SchooladminpageComponent } from './schooladminpage/schooladminpage.component';
import { AddfileComponent } from './addfile/addfile.component';
@NgModule({
  declarations: [SchooladminComponent, SchooladminhistoryComponent, StudenthistoryComponent, SchooladminpageComponent, AddfileComponent],
  imports: [
    CommonModule,
    SchooladminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule 
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SchooladminModule { }
