import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { HostListener } from "@angular/core";
import { first } from 'rxjs/operators';
import { RetailerService } from '../../../services/retailer.service';
@Component({
  selector: 'app-retailerlist',
  templateUrl: './retailerlist.component.html',
  styleUrls: ['./retailerlist.component.scss']
})
export class RetailerlistComponent implements OnInit {

displayedColumns: string[] = ['collectionDate', 'name', 'programName', 'collectionTotalWeight','action'];
getallRetailer;
dataSource = new MatTableDataSource(this.getallRetailer);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private retailerService: RetailerService) { }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.GetallRetailer();
  }

  GetallRetailer(){ 
   this.retailerService.getallretailer().subscribe(data=>{   
        this.getallRetailer = data;
    this.dataSource.data = this.getallRetailer;  
   });  
  }

print(element): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()"><table><thead><tr><th>${element.retailername}</th></tr></thead><tbody><tr><td>${element.retailername}</td></tr></tbody></table></body>
      </html>`
    );
    popupWin.document.close();
}
}
export interface PeriodicElement {
  name: string;
  collectionDate: number;
  programName: string;
  collectionTotalWeight: number;
}
