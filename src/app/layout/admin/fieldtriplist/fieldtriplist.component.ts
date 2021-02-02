import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog, MatSort} from '@angular/material';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import {HostListener} from '@angular/core';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-fieldtriplist',
  templateUrl: './fieldtriplist.component.html',
  styleUrls: ['./fieldtriplist.component.scss']
})
export class FieldtriplistComponent implements OnInit {
  displayedColumns: string[] = ['ticket', 'dpm', 'distance', 'actuals','cost', 'date', 'description', 'tripStart', 'tripEnd','photo'];
  getAllTrips;
  dataSource = new MatTableDataSource(this.getAllTrips);
  regiForm: FormGroup;
  private renderedData: any;
  private messages: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService) {
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
	this.dataSource.data = this.getAllTrips;
  }

  getAllFieldTrips() {
    debugger;
    this.userService.getFieldTrips().subscribe(data => {
      debugger;
      this.getAllTrips = data;
      this.dataSource.data = this.getAllTrips;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportCsv() {
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
    headers: ["Date", "Ticket #", "Distance (KMS)","Actual KMS","Cost (INR)", "DPM", "Trip Start","Trip End", "Start Coordinates" , "End Coordinates", "Type", "Description", "Photo"],
	filter : []
  };
    new ngxCsv(this.renderedData, 'Trip Report', options);
  }

  fillTripList(form) {
    debugger;
    this.userService.getTripsBwDates(form).pipe(first()).subscribe(
      data => {
        debugger;
        if(data != null) {
          this.getAllTrips = data;
          this.dataSource.data = this.getAllTrips;
          this.dataSource.connect().next(data);
			
		  this.dataSource.sort = this.sort;
		  this.dataSource.paginator = this.paginator;
		  
        } else {
          swal.fire({
            title: 'Server Error',
            type: 'error',
            text: 'No Trips Taken for this date range',
          });
          this.getAllTrips = null;
          this.dataSource.data = null;
          this.dataSource.connect().next([]);
        }
      },
      error => {
        debugger;
        swal.fire({
          title: 'Server Error',
          type: 'error',
        });
      });
  }
  
   viewPhoto(url) {
    debugger;
    window.open(url, 'popup', 'width=1000,height=800,left=100,top=100');
  }
}
