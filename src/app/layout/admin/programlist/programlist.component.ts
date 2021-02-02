import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatDialog, MatSort} from '@angular/material';
import { HostListener } from "@angular/core";
import { first } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-programlist',
  templateUrl: './programlist.component.html',
  styleUrls: ['./programlist.component.scss']
})
export class ProgramlistComponent implements OnInit {

displayedColumns: string[] = ['programname','purpose','startdate','enddate','status','action'];
getprogramlist;
getallprogram;
deleteenable;
dataSource = new MatTableDataSource(this.getallprogram);
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog,private userService: UserService) { }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.Getallprogram();
  }

  Getallprogram(){
  debugger
   this.userService.getallprogram().subscribe(data=>{
  debugger
        this.getallprogram = data;
    this.dataSource.data = this.getallprogram;  
 
   });  

   
  }

 deleteProgram(id,element) {
   debugger

     this.userService.getprogramlist().subscribe(data=>{
   debugger
        this.getprogramlist = data;

         for(let i=0;i< this.getprogramlist.length;i++){

           if(this.getprogramlist[i].programName == element.programName){
swal.fire({
              //  type:'success',
                title: 'this '+element.programName+' is mapping to entity!',
              //  text: 'this program is mapping to entity',              
              })
          

           }
           else{
         swal.fire({
          //type:'warning',
          //title: 'Are you sure to delete the program name',
          text:'Are you sure to delete '+element.programName+'',
          showCancelButton: true,
          confirmButtonColor: '#049F0C',
          cancelButtonColor:'#ff0000',
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) =>{
           //debugger
           if(result.value == true){
           debugger
       this.userService.deleteprogram(id).subscribe((res) => {
     //debugger
           swal.fire({
                type:'success',
                //title: 'Deleted Successfully!',
                text: ''+element.programName+' deleted successfully!',              
              }).then(function(){ 
             location.reload();
            });
          })
          }
        
        })
           }

          }
});
     
         
   }


}

export interface PeriodicElement {
  programname: string;
  startdate: number;
  enddate: number;
  purpose: string;
}
