import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {MatPaginator, MatTableDataSource, MatSort,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { first } from 'rxjs/operators';
import { CollectingService } from '../../../services/collecting.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
//import swal from 'sweetalert2';
import swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-retailerhistory',
  templateUrl: './retailerhistory.component.html',
  styleUrls: ['./retailerhistory.component.scss']
})
export class RetailerhistoryComponent implements OnInit {

  displayedColumns: string[] = ['startDate','batchNumber', 'storename', 'programName', 'noOfBags','collectionTotalWeight','action'];
  getretailerhistory;
  dataSource = new MatTableDataSource(this.getretailerhistory);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog,private collectingService: CollectingService) { }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.Getretailerhistory();
  }

  Getretailerhistory(){
 
   this.collectingService.getretailerhistory().subscribe(data=>{
   debugger
        this.getretailerhistory = data;
    this.dataSource.data = this.getretailerhistory;  
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
  startDate: string;
  storename: string;
  programName: string;
  collectionTotalWeight: number;
}


@Component({
  selector: 'barcode-print',
  templateUrl: '../barcodeprint.html',
})
export class BarcodePrint {
  Barcodegenerate : any = {};
   
    constructor(
    public dialogRef: MatDialogRef<BarcodePrint>,
    @Inject(MAT_DIALOG_DATA) public data,private collectingService: CollectingService) {
    debugger
        this.Barcodegenerate  = data;
    }
    
  onNoClick(): void {
    this.dialogRef.close();
  }
  elementType = 'svg';
  format = 'CODE128';
  lineColor = '#000000';
  width = 2;
  height = 100;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 2;
  fontSize = 20;
  background = '#ffffff';
  margin = 10;
  marginTop = 10;
  marginBottom = 10;
  marginLeft = 10;
  marginRight = 10;


}



