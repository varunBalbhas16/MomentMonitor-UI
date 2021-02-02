import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource,MatDialog,MatSort} from '@angular/material';
import { HostListener } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-ticketlist',
  templateUrl: './ticketlist.component.html',
  styleUrls: ['./ticketlist.component.scss']
})
export class TicketlistComponent implements OnInit {
displayedColumns: string[] = ['ticket','status','dpm','centreName','description'];
  getAllTickets;
dataSource = new MatTableDataSource(this.getAllTickets);

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;


  constructor(public dialog: MatDialog,private userService: UserService) { }

  ngOnInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.getTickets();
   
  }

  deleteTicket(id,element) {
   //debugger
      swal.fire({
          //type:'warning',
          //title: 'Are you sure to delete the Ticket',
          text:'Are you sure to delete '+element.centreName+'',
          showCancelButton: true,
          confirmButtonColor: '#049F0C',
          cancelButtonColor:'#ff0000',
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) =>{
           //debugger
           if(result.value == true){
           debugger
           this.userService.deleteTicket(id).subscribe((res) => {
        //debugger
           swal.fire({
                type:'success',
                //title: 'Deleted Successfully!',
                text: ''+element.ticket+' deleted successfully!',
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


  getTickets(){
  debugger;
   this.userService.getAllTickets().subscribe(data=>{
    debugger;
        this.getAllTickets = data;
        this.dataSource.data = this.getAllTickets;
   });  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
