import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { HostListener } from "@angular/core";
import { first } from 'rxjs/operators';
import { SchooladminService } from '../../../services/schooladmin.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-schooladminhistory',
  templateUrl: './schooladminhistory.component.html',
  styleUrls: ['./schooladminhistory.component.scss']
})
export class SchooladminhistoryComponent implements OnInit {
displayedColumns: string[] = ['date', 'programName','totalWeight','totalRecycle','totalWaste','action'];
getallSchooladmin;

dataSource = new MatTableDataSource(this.getallSchooladmin);
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  constructor(private schooladminService: SchooladminService) { }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.Getallschooladmin();

  }

   Getallschooladmin(){

   //this.schooladminService.getallschooladmin().subscribe(data=>{
     this.schooladminService.getSchoolContributions(localStorage.getItem('schooladmincontributorId')).subscribe(data=>{

        this.getallSchooladmin = data;
    this.dataSource.data = this.getallSchooladmin;
   });
  }

}

