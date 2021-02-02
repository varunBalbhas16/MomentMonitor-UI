import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {HostListener} from '@angular/core';
import {first} from 'rxjs/operators';
import {SupervisorService} from '../../../services/supervisor.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import swal from 'sweetalert2';

@Component({
  selector: 'app-supervisorlist',
  templateUrl: './supervisorlist.component.html',
  styleUrls: ['./supervisorlist.component.scss']
})
export class SupervisorlistComponent implements OnInit {
  totalweight: number;

  displayedColumns: string[] = ['batchNumber', 'type', 'name', 'status', 'totalWeight', 'action'];
  getallsupervisor;
  dataSource = new MatTableDataSource(this.getallsupervisor);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private supervisorService: SupervisorService) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.Getallsupervisor();
  }

  Getallsupervisor() {

    this.supervisorService.getallsupervisor().subscribe(data => {
    debugger
      this.getallsupervisor = data;
      this.dataSource.data = this.getallsupervisor;
    });
  }

  openDialog(element): void {
    // debugger
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px !important',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger;
      console.log('The dialog was closed');
      this.dataSource.paginator = this.paginator;
      this.Getallsupervisor();
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  showsupervisordata: any = {};

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data, private supervisorService: SupervisorService) {
  debugger
    this.showsupervisordata = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closebatch() {
    this.supervisorService.closebatch(this.showsupervisordata.batchNumber).pipe(first()).subscribe(data => {
      debugger
        if (data.message == 'success') {
          swal.fire({
            title: 'Great Job!!!',
            text: 'Batch ' + data.description + ' is successfully Sorted and Closed',
          }).then((result) => {
            if (result.value) {
              this.dialogRef.close();
            }
          });
        } else if (data.message == 'failure') {
          swal.fire({text: '' + data.result + ''});
        }

      },
      error => {
        swal.fire({text: 'server error'});
      });
  }

}



