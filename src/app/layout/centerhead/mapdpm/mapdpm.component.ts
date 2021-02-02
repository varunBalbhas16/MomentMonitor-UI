import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-mapdpm',
  templateUrl: './mapdpm.component.html',
  styleUrls: ['./mapdpm.component.scss']
})

export class MapdpmComponent implements OnInit {
  regiForm: FormGroup;
  public form: string;
  deptCheck;
  private dpmId: number;
  public dpms = [] as any;
  userId: number;
  centreId: number;
  dpmContact: number;
  public dpmName: string;
  dpmNameFromList : string;

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
      dpmNameFromList: ['', Validators.compose(null)],
      dpmContact: ['', Validators.compose(null)],
      userId: ['', Validators.compose(null)],
      centreId: ['', Validators.compose(null)],
      dpmId: ['', Validators.compose(null)],
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
        if (null != data && data.result == 'success') {
          debugger;

          this.userService.saveMappedDepartment(form).pipe(first()).subscribe(
            data => {
              debugger;
              swal.fire({
                type: 'success',
                text: data.message,
              });
              this.router.navigate(['/centerhead/listmapdpms']);
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
    this.regiForm.controls.dpmNameFromList.valueChanges.subscribe(
      term => {
        if (term != '') {
          debugger;
          if (term.userId != null) {
            this.dpmId = term.userId;
            this.dpmName = term.firstName;
            this.dpmContact = term.contact;
          }

          this.userService.getNonMappedDPMs(term).subscribe(
            availableDPMs => {
              debugger;
              this.dpms = availableDPMs;
            });
        }
      });
  }

  displayDpms(selectedDpm): string {
    debugger;
    if (!selectedDpm) {
      return '';
    }
    this.dpmNameFromList = selectedDpm.name;
    this.dpmId = selectedDpm.dpmId;
    return selectedDpm ? selectedDpm.firstName + ' ' + selectedDpm.lastName : selectedDpm;
  }
}
