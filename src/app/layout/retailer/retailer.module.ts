import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule,FormBuilder, FormGroup, Validators , NgForm}   from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule} from '@angular/material';
import { RetailerRoutingModule } from './retailer-routing.module';
import { RetailerComponent } from './retailer.component';
import { RetailerlistComponent } from './retailerlist/retailerlist.component';
import { RetailerbatchdetailsComponent } from './retailerbatchdetails/retailerbatchdetails.component';
@NgModule({
  declarations: [RetailerComponent,RetailerlistComponent, RetailerbatchdetailsComponent],
  imports: [
    CommonModule,
    RetailerRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class RetailerModule { }
