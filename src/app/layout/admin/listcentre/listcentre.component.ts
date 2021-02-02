import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog, MatSort} from '@angular/material';
import {HostListener} from '@angular/core';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-listzone',
  templateUrl: './listcentre.component.html',
  styleUrls: ['./listcentre.component.scss']
})
export class ListcentreComponent implements OnInit {
  displayedColumns: string[] = ['centreName', 'centreCode', 'landline', 'address', 'action'];
  getallEntity;
  dataSource = new MatTableDataSource(this.getallEntity);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private userService: UserService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllZones();
  }

  getAllZones() {
    //debugger
    this.userService.getAllCentres().subscribe(data => {
      debugger
      this.getallEntity = data;
      this.dataSource.data = this.getallEntity;
    });
  }

  deleteCentre(id, element) {
    debugger;
    swal.fire({
      text: 'Are you sure to delete the Centre - ' + element.centreName + ' ?',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      debugger;
      if (result.value == true) {
        debugger;
        this.userService.deleteCentre(id).subscribe((res) => {
          debugger;
          swal.fire({
            type: 'success',
            //title: 'Deleted Successfully!',
            text: 'Centre ' + element.centreName + ' deleted successfully!',
          }).then(function() {
            location.reload();
          });
        });
      }
    });
  }
}

