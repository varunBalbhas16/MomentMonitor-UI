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
  templateUrl: './listzone.component.html',
  styleUrls: ['./listzone.component.scss']
})
export class ListzoneComponent implements OnInit {
  displayedColumns: string[] = ['zone', 'code', 'description', 'action'];
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
    this.userService.getAllZones().subscribe(data => {
      debugger
      this.getallEntity = data;
      this.dataSource.data = this.getallEntity;
    });
  }

  deleteZone(id, element) {
    debugger;
    swal.fire({
      text: 'Are you sure to delete the Zone - ' + element.zone + ' ?',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      debugger;
      if (result.value == true) {
        debugger;
        this.userService.deleteZone(id).subscribe((res) => {
          debugger;
          swal.fire({
            type: 'success',
            //title: 'Deleted Successfully!',
            text: '' + element.zone + ' zone deleted successfully!',
          }).then(function() {
            location.reload();
          });
        });
      }
    });
  }
}

