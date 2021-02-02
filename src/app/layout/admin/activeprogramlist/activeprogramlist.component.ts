import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatDialog, MatSort} from '@angular/material';
import { HostListener } from "@angular/core";
import { first } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-activeprogramlist',
  templateUrl: './activeprogramlist.component.html',
  styleUrls: ['./activeprogramlist.component.scss']
})
export class ActiveprogramlistComponent implements OnInit {

displayedColumns: string[] = ['programname','contributorName','type','status','totalWeight','totalRecyclable','totalWaste'];
getprogramlist;
dataSource = new MatTableDataSource(this.getprogramlist);

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog,private userService: UserService) { }

  ngOnInit() {
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   this.Getprogramlist();
  }
  Getprogramlist(){
   debugger
   this.userService.getprogramlist().subscribe(data=>{
   debugger
        this.getprogramlist = data;
    this.dataSource.data = this.getprogramlist;  
   });  
  }

}

