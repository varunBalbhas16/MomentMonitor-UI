import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatDialog,MatSort} from '@angular/material';
import { HostListener } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
displayedColumns: string[] = ['firstName','email','contact','role','action'];
getallUsers;
dataSource = new MatTableDataSource(this.getallUsers);

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;


  constructor(public dialog: MatDialog,private userService: UserService) { }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.getallusers();
   
  }

  deleteUser(id,element) {
   //debugger
      swal.fire({
          //type:'warning',
          //title: 'Are you sure to delete the User',
          text:'Are you sure to delete '+element.firstName+'',
          showCancelButton: true,
          confirmButtonColor: '#049F0C',
          cancelButtonColor:'#ff0000',
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) =>{
           //debugger
           if(result.value == true){
           debugger
           this.userService.deletuser(id).subscribe((res) => {
        //debugger
           swal.fire({
                type:'success',
                //title: 'Deleted Successfully!',
                text: ''+element.firstName+' deleted successfully!',              
              }).then(function(){ 
             location.reload();
            });
          })
          }/*else if (result.dismiss === swal.DismissReason.cancel) {
       swal.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
      )}*/
        
        })
         
   }


  getallusers(){
  //debugger
   this.userService.getAllUsers().subscribe(data=>{
  //debugger
        this.getallUsers = data;
    this.dataSource.data = this.getallUsers;  
   });  
  }

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

}
