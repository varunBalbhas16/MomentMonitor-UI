import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule,FormBuilder, FormGroup, Validators , NgForm}   from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule} from '@angular/material';
    import { NgxBarcodeModule } from 'ngx-barcode';
import { CollectingRoutingModule } from './collecting-routing.module';
import { CollectingComponent } from './collecting.component';
import { CollectionComponent } from './collection/collection.component';
import { SchoolhistoryComponent } from './schoolhistory/schoolhistory.component';
import { RetailerhistoryComponent,BarcodePrint } from './retailerhistory/retailerhistory.component';
import {NgxPrintModule} from 'ngx-print';
@NgModule({
  declarations: [CollectingComponent, CollectionComponent, SchoolhistoryComponent, RetailerhistoryComponent,BarcodePrint],
  imports: [
    CommonModule,
    CollectingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    NgxBarcodeModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule,MatTooltipModule
  ],
   entryComponents: [RetailerhistoryComponent,BarcodePrint],
   exports: [
        CollectionComponent
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CollectingModule { }
