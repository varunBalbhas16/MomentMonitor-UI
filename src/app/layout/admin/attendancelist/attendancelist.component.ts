import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatDialog,MatSort} from '@angular/material';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { HostListener } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-attendancelist',
  templateUrl: './attendancelist.component.html',
  styleUrls: ['./attendancelist.component.scss']
})
export class AttendancelistComponent implements OnInit {
  regiForm: FormGroup;
displayedColumns: string[] = ['workDate', 'username', 'attendance', 'shift', 'vehicle','district','others'];
getAllAttendance;
dataSource = new MatTableDataSource(this.getAllAttendance);
  

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  private renderedData: any;
  private messages: any;

  constructor(private fb: FormBuilder, public dialog: MatDialog,private userService: UserService) {
    this.regiForm = fb.group({
      'startdate': ['', Validators.compose([
        Validators.required
      ])],
      'enddate': ['', Validators.compose([
        Validators.required
      ])],
    });

    this.messages = {
      'startdate': [
        {type: 'required', message: 'Please select the Start Date.'},
      ],
      'enddate': [
        {type: 'required', message: 'Please select the End Date.'},
      ],
    };
  }

  ngOnInit() {
	  debugger;
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  //this.getAttendance();
    //this.getAllAttendance = [];
    this.dataSource.data = this.getAllAttendance;
  }

  getAttendance(){
  debugger;
   this.userService.getDriverAttendance().subscribe(data=>{
    debugger;
        this.getAllAttendance = data;
        this.dataSource.data = this.getAllAttendance;
   });  
  }

  applyFilter(filterValue: string) {
	  debugger;
    this.dataSource.filter = filterValue.trim().toLowerCase();	
	
  }

  exportCsv() {
	  debugger; 
    this.dataSource.connect().subscribe(data => this.renderedData = this.dataSource.filteredData);
	var options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: false,
    title: 'Your title',
    useBom: false,
    noDownload: false,
    headers: ["Driver", "Date", "Attendance","Driver ID", "Vehicle","Shift", "Others", "District"],
	filter : []
  };
    new ngxCsv(this.renderedData, 'Attendance Report', options);
  }

  fillAttendance(form) {
    debugger;
    this.userService.getDriverAttendanceBwDates(form).pipe(first()).subscribe(
      data => {
        debugger;
        if(data != null) {
          this.getAllAttendance = data;
          this.dataSource.data = this.getAllAttendance;
          this.dataSource.connect().next(data);
		  
		  this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
		  //this.renderedData = data;
		  
        } else {
          swal.fire({
            title: 'Server Error',
            type: 'error',
            text: 'No Attendance marked for this date range',
          });
          this.getAllAttendance = null;
          this.dataSource.data = null;
          this.dataSource.connect().next([]);
        }
        // this.dataSource.connect().subscribe(data => this.renderedData = data);

      },
      error => {
        debugger;
        swal.fire({
          title: 'Server Error',
          type: 'error',
        });
      });
  }

}
