import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HostListener } from "@angular/core";
import { first } from 'rxjs/operators';
import { SupervisorService } from '../../../services/supervisor.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import swal from 'sweetalert2';
@Component({
  selector: 'app-listofagent',
  templateUrl: './listofagent.component.html',
  styleUrls: ['./listofagent.component.scss']
})
export class ListofagentComponent implements OnInit {
displayedColumns: string[] = ['name','batchNumber', 'totalWeight', 'totalReusable','totalWaste'];
getallsupervisor;
dataSource = new MatTableDataSource(this.getallsupervisor);
@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public dialog: MatDialog,private supervisorService: SupervisorService) { }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.Getallsupervisor();
  }
   Getallsupervisor(){
 
   this.supervisorService.getAllSortingSupervisor().subscribe(data=>{
   
        this.getallsupervisor = data;
    this.dataSource.data = this.getallsupervisor;  
   });  
  }

}
