import { Component, OnInit,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatDialog, MatSort} from '@angular/material';
import { HostListener } from "@angular/core";
import { first } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-listentity',
  templateUrl: './listentity.component.html',
  styleUrls: ['./listentity.component.scss']
})
export class ListentityComponent implements OnInit {
displayedColumns: string[] = ['schoolname', 'contactperson', 'phonenumber','type','action'];
getallEntity;
dataSource = new MatTableDataSource(this.getallEntity);
 
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog,private userService: UserService) { }

 
  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.Getallentity();
  }

Getallentity(){
   //debugger
   this.userService.getallentity().subscribe(data=>{
   //debugger
        this.getallEntity = data;
    this.dataSource.data = this.getallEntity;  
   });  
  }

 deleteEntity(id,element) {
   debugger
   //this.customerService.deleteCustomer(id).subscribe();
      swal.fire({
       //   type:'warning',
          //title: 'Are you sure to delete the entity ',
          text: 'Are you sure to delete '+element.name+'',    
            showCancelButton: true,
          confirmButtonColor: '#049F0C',
          cancelButtonColor:'#ff0000',
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) =>{
           debugger
           if(result.value == true){
           debugger
           this.userService.deleteentity(id).subscribe((res) => {
     debugger
           swal.fire({
                type:'success',
                //title: 'Deleted Successfully!',
                text: ''+element.name+' deleted successfully!',              
              }).then(function(){ 
             location.reload();
            });
          })
          } /*else if (result.dismiss === swal.DismissReason.cancel) {
       swal.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
      )}*/
        
        })
         
   }


}

