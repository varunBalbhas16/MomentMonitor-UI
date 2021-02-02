import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { SchoolhistoryComponent } from './schoolhistory/schoolhistory.component';
import { RetailerhistoryComponent } from './retailerhistory/retailerhistory.component';
const routes: Routes = [
            {
                path: 'collection',
                component: CollectionComponent,
            },
            {
                path: 'schoolhistory',
                component: SchoolhistoryComponent,
            },
            {
                path: 'retailerhistory',
                component: RetailerhistoryComponent,
            }
            
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectingRoutingModule { }
