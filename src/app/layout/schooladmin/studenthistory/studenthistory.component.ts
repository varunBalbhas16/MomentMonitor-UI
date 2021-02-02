import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { HostListener } from "@angular/core";
import { first } from 'rxjs/operators';
import { SchooladminService } from '../../../services/schooladmin.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-studenthistory',
  templateUrl: './studenthistory.component.html',
  styleUrls: ['./studenthistory.component.scss']
})
export class StudenthistoryComponent implements OnInit {
displayedColumns: string[] = ['studentname', 'class', 'section','weight','recyclable'];
getallStudenthistory;
dataSource = new MatTableDataSource(this.getallStudenthistory);
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  constructor(private schooladminService: SchooladminService) { }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.Getallstudenthistory();
  }

  Getallstudenthistory(){

   // this.schooladminService.getallstudenthistory().subscribe(data=>{
    this.schooladminService.getSchoolStudents(localStorage.getItem('schooladmincontributorId')).subscribe(data=> {
        this.getallStudenthistory = data;
        this.dataSource.data = this.getallStudenthistory;
   });
  }

}

