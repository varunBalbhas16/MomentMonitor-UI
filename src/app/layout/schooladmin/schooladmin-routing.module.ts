import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchooladminhistoryComponent } from './schooladminhistory/schooladminhistory.component';
import { StudenthistoryComponent } from './studenthistory/studenthistory.component';
import { SchooladminpageComponent } from './schooladminpage/schooladminpage.component';
import { AddfileComponent } from './addfile/addfile.component';
const routes: Routes = [
            {
                path: 'schooladminpage',
                component: SchooladminpageComponent,
            },
            {
                path: 'schooladminhistory',
                component: SchooladminhistoryComponent,
            },
            {
                path: 'studenthistory',
                component: StudenthistoryComponent,
            },
            {
                path: 'fileupload',
                component: AddfileComponent,
            }
            
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchooladminRoutingModule { }
