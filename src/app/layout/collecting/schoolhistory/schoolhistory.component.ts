import { Component, OnInit,ViewChild,Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HostListener } from "@angular/core";
import { first } from 'rxjs/operators';
import { RetailerhistoryComponent,BarcodePrint } from '../retailerhistory/retailerhistory.component';
import { CollectingService } from '../../../services/collecting.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
//import swal from 'sweetalert2';
import swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-schoolhistory',
  templateUrl: './schoolhistory.component.html',
  styleUrls: ['./schoolhistory.component.scss']
})
export class SchoolhistoryComponent implements OnInit {
displayedColumns: string[] = ['startDate','batchNumber', 'schoolname', 'programName', 'collectionTotalWeight','action'];
getschoolhistory;
dataSource = new MatTableDataSource(this.getschoolhistory);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,private collectingService: CollectingService) { }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.Getschoolhistory();
  }

  Getschoolhistory(){
 
   this.collectingService.getschoolhistory().subscribe(data=>{
   
        this.getschoolhistory = data;
    this.dataSource.data = this.getschoolhistory;  
   });  
  }

  openDialog(element): void {
   // debugger
    const dialogRef = this.dialog.open(BarcodePrint, {
      width: '500px !important',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
    //debugger
      console.log('The dialog was closed');
    });
  }
}
export interface PeriodicElement {
  startDate:string,
  schoolname: string;
  programName: string;
  collectionTotalWeight: number;  
}

