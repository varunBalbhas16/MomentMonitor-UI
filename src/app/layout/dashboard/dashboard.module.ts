import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CollectingModule } from '../collecting/collecting.module';
import { SortingModule } from '../sorting/sorting.module';
import { SupervisorModule } from '../supervisor/supervisor.module';
import { FormsModule , ReactiveFormsModule,FormBuilder, FormGroup, Validators , NgForm}   from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule} from '@angular/material';
import { SchooladmindashboardComponent } from './schooladmindashboard/schooladmindashboard.component';
import { RetailerdashboardComponent } from './retailerdashboard/retailerdashboard.component';
@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [DashboardComponent, AdmindashboardComponent, SchooladmindashboardComponent, RetailerdashboardComponent],
  imports: [
    CommonModule,
    CollectingModule,
    DashboardRoutingModule,
    SortingModule,
    SupervisorModule,
     FormsModule , ReactiveFormsModule,
   FlexLayoutModule.withConfig({addFlexToParent: false}),
   MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule,MatInputModule,MatAutocompleteModule, MatCardModule, MatCheckboxModule,
    MatFormFieldModule,  MatNativeDateModule, MatRadioModule, MatSelectModule,
    MatSliderModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule,MatButtonToggleModule,MatDialogModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
