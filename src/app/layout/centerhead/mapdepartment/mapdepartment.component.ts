import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-mapdepartment',
  templateUrl: './mapdepartment.component.html',
  styleUrls: ['./mapdepartment.component.scss']
})

export class MapdepartmentComponent implements OnInit {
  regiForm: FormGroup;
  public form: string;
  deptCheck;
  private departmentId: number;
  public depts = [] as any;
  userId: number;
  centreId: number;
  departmentHeadId: number;
  public deptHeads = [] as any;
  public departmentName: string;
  departmentNameFromList : string;
  departmentHeadList: string;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.regiForm = fb.group({
      /*
      departmentName: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.minLength(5),
        Validators.pattern(/^[a-zA-Z0-9._\- ]*$/),
        Validators.required
      ])],
       */
      departmentHeadList: ['', Validators.compose(null)],
      departmentNameFromList: ['', Validators.compose(null)],
      departmentHead: ['', Validators.compose(null)],
      userId: ['', Validators.compose(null)],
      centreId: ['', Validators.compose(null)],
      departmentId: ['', Validators.compose(null)],
      departmentHeadId: ['', Validators.compose(null)],
    });

    /*
    this.deptCheck = {
      departmentNameFromList: [
        {type: 'required', message: 'Department Name is required'},
        {type: 'minlength', message: 'Department Name must be at least 5 characters long'},
        {type: 'maxlength', message: 'Department Name cannot be more than 60 characters long'},
        {type: 'pattern', message: 'Department name must contain only alphabets and numbers'},
      ],
    };
     */
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    debugger;
    this.userService.checkAlreadyMappedDepartment(form).subscribe(
      data => {
        debugger;
        // tslint:disable-next-line:triple-equals
        if (null != data && data.result == 'success') {
          debugger;

          this.userService.saveMappedDepartment(form).pipe(first()).subscribe(
            data => {
              debugger;
              swal.fire({
                type: 'success',
                text: data.message,
              });
              this.router.navigate(['/centerhead/listmapdepartments']);
            },
            error => {
              swal.fire({
                title: 'Server Error',
                type: 'error',
              });
            });
        } else {
          swal.fire({
            text: 'We already have this Department name please check',
          });
        }
      },
      error => {
        swal.fire({
          title: 'Server Error',
          //text: "You will not be able to recover this imaginary file!",
          type: 'error',
        });
      });
  }

  ngOnInit() {
    debugger;
    this.userId = parseInt(localStorage.getItem('Userid'));
    this.centreId = parseInt(localStorage.getItem('centreId'));
    this.regiForm.controls.departmentNameFromList.valueChanges.subscribe(
      term => {
        if (term != '') {
          debugger;
          if (term.departmentId != null) {
            this.departmentId = term.departmentId;
            this.departmentName = term.name;
          }

          this.userService.getUnmappedDepartmentsForCentre(this.centreId, term).subscribe(
            unmappedDepts => {
              debugger;
              this.depts = unmappedDepts;
            });
        }
      });

    this.regiForm.controls.departmentHeadList.valueChanges.subscribe(
      term => {
        if (term != '') {
          debugger;

          if (term.userId != null) {
            this.departmentHeadId = term.userId;
            this.departmentName = term.firstName + ' ' + term.lastName;
          }

          debugger;
          this.userService.getDeptHeadsHavingNameLike(term).subscribe(
            departmentHeadsData => {
              debugger;
              this.deptHeads = departmentHeadsData;
            });
        }
      });
  }

  displayDepts(selectedDepartment): string {
    debugger;
    if (!selectedDepartment) {
      return '';
    }
    this.departmentNameFromList = selectedDepartment.name;
    this.departmentId = selectedDepartment.departmentId;
    return selectedDepartment ? selectedDepartment.name : selectedDepartment;
  }

  displayDeptHeads(selectedHead): string {
    debugger;
    if (!selectedHead) {
      return '';
    }
    // this.userId = selectedHead.userId;
    this.departmentHeadId = selectedHead.userId;
    return selectedHead ? selectedHead.firstName + ' ' + selectedHead.lastName : selectedHead;
  }
}
