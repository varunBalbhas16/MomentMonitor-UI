import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
//import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
@NgModule({
  declarations: [LayoutComponent,TopnavComponent, SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
   // TranslateModule
  ]
})
export class LayoutModule { }
