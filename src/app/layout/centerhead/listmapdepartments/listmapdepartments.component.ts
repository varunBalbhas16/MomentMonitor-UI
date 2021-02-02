import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {HostListener} from '@angular/core';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-listmapdepartments',
  templateUrl: './listmapdepartments.component.html',
  styleUrls: ['./listmapdepartments.component.scss']
})
export class ListmapdepartmentsComponent implements OnInit {

  displayedColumns: string[] = ['departmentName', 'departmentHeadName', 'departmentHeadContact', 'action'];
  getMappedDepartmentData;
  dataSource = new MatTableDataSource(this.getMappedDepartmentData);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  centreId: number;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.centreId = parseInt(localStorage.getItem('centreId'));
    this.dataSource.paginator = this.paginator;
    this.getMappedDepartments();
  }

  getMappedDepartments() {
    this.userService.getMappedDepartmentsForCentre(this.centreId).subscribe(data => {
      this.getMappedDepartmentData = data;
      this.dataSource.data = this.getMappedDepartmentData;
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
