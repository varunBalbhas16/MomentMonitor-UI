import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule , ReactiveFormsModule,FormBuilder, FormGroup, Validators , NgForm}   from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule, MatGridListModule} from '@angular/material';
import { SortingRoutingModule } from './sorting-routing.module';
import { SortingComponent } from './sorting.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { SortingclothesComponent } from './sortingclothes/sortingclothes.component';
import { SystemdetailsComponent } from './systemdetails/systemdetails.component';
import { RetailersortingclothesComponent } from './retailersortingclothes/retailersortingclothes.component';
@NgModule({
  declarations: [SortingComponent, StudentdetailsComponent, SortingclothesComponent, SystemdetailsComponent, RetailersortingclothesComponent],
  imports: [
    CommonModule,
    SortingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     MatGridListModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
   exports: [
        SystemdetailsComponent
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SortingModule { }
