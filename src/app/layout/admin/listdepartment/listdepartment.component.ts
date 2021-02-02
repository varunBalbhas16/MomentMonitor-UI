import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog, MatSort} from '@angular/material';
import {HostListener} from '@angular/core';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrls: ['./listdepartment.component.scss']
})
export class ListdepartmentComponent implements OnInit {
  displayedColumns: string[] = ['deptName', 'deptDescription', 'action'];
  getallEntity;
  dataSource = new MatTableDataSource(this.getallEntity);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private userService: UserService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllDepartments();
  }

  getAllDepartments() {
    this.userService.getAllDepartments().subscribe(data => {
      debugger;
      this.getallEntity = data;
      debugger;
      this.dataSource.data = this.getallEntity;
    });
  }

  deleteDepartment(id, element) {
    debugger;
    swal.fire({
      text: 'Are you sure to delete the Department ' + element.name,
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      debugger;

      if (result.value == true) {
        debugger;
        this.userService.deleteDepartment(id).subscribe((res) => {
          debugger;
          swal.fire({
            type: 'success',
            text: 'Department ' + element.name + ' deleted successfully!',
          }).then(function() {
            location.reload();
          });
        });
      }
    });
  }

}
