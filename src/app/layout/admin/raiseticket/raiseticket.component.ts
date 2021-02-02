import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {filter, map} from 'rxjs/operators';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {FormControl} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service';

import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.scss']
})
export class RaiseticketComponent implements OnInit {
  regiForm: FormGroup;
  school = <any> [];
  centreDeptData: any = {};
  public dpmDataFromList: any = {};
  account_validation_messages;
  mobnumPattern = '^((\\+27-?)|0)?[0-9]{9}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  public ocenters = [] as any;
  private center: string;
  private centreId: number;
  public odepartments = [] as any;
  private department: string;
  private departmentId: number;
  private coordinator: string;
  private coordinatorId: number;
  public odpms = [] as any;
  private dpmSelect: string;
  private dpm: string;
  private dpmId: number;
  private contact: number;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.regiForm = fb.group({
      'centre': ['', Validators.compose([
        Validators.maxLength(60),
        Validators.minLength(5),
        Validators.pattern(/^(\D)*$/),
        Validators.required
      ])],
      department: ['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern(/^(\D)*$/),
        Validators.required
      ])],
      'contact': ['', Validators.compose(null)],
      'email': ['', Validators.compose(null)],
      'coordinator': ['', Validators.compose(null)],
      'dpm': ['', Validators.compose(null)],
      'dateofappointment': ['', Validators.compose([
        Validators.required
      ])],
      'hourofappointment': ['', Validators.compose([
        Validators.required
      ])],
      'description': ['', Validators.compose(null)],
      ocenters: ['', Validators.compose(null)],
      odepartments: ['', Validators.compose(null)],
      departmentId: ['', Validators.compose(null)],
      centreId: ['', Validators.compose(null)],
      coordinatorId: ['', Validators.compose(null)],
      dpmId: ['', Validators.compose(null)],
      dpmSelect: ['', Validators.compose(null)],
    });

    this.account_validation_messages = {
      'centre': [
        {type: 'required', message: 'Center is required'},
        {type: 'minlength', message: 'Center must be at least 3 characters long'},
        {type: 'maxlength', message: 'Center cannot be more than 25 characters long'},
        {type: 'pattern', message: 'Center must contain only letters'},

      ],
      'department': [
        {type: 'required', message: 'Department is required'},
        {type: 'minlength', message: 'Department must be at least 3 characters long'},
        {type: 'maxlength', message: 'Department cannot be more than 25 characters long'},
        {type: 'pattern', message: 'Department must contain only letters'},
      ],
      'dateofappointment': [
        {type: 'required', message: 'Please select the Appointment Date.'},
      ],
      'hourofappointment': [
        {type: 'required', message: 'Please select the Appointment Time.'},
      ],

    };
  }

  ngOnInit() {
    debugger;

    this.regiForm.controls.centre.valueChanges.subscribe(
      term => {
        if (term != '') {
          debugger;
          if (term.centreId != null) {
            this.centreId = term.centreId;
          }

          this.userService.searchCentresByName(term).subscribe(
            searchedCentres => {
              debugger;
              this.ocenters = searchedCentres;
            });
        }
      });

    this.regiForm.controls.department.valueChanges.subscribe(
      term => {
        if (term != '') {
          debugger;
          if (term.departmentId != null) {
            this.departmentId = term.departmentId;
            this.coordinatorId = term.departmentHeadId;
            this.centreDeptData = term;
          }

          this.userService.searchCentreDepartmentsByName(this.centreId, term).subscribe(
            searchedDepartments => {
              debugger;
              this.odepartments = searchedDepartments;
            });
        }
      });

    this.regiForm.controls.dpmSelect.valueChanges.subscribe(
      searchDpm => {
        if (searchDpm != '') {
          debugger;
          if (searchDpm.dpmId != null) {
            this.dpmId = searchDpm.dpmId;
            this.dpm = searchDpm.dpmName;
            this.dpmDataFromList = searchDpm;
          }

          this.userService.searchDpmsByName(searchDpm).subscribe(
            searchedDpms => {
              debugger;
              this.odpms = searchedDpms;
            });
        }
      });
  }

  displayCentres(selectedCenter): string {
    debugger;
    if (!selectedCenter) {
      return '';
    }
    this.center = selectedCenter.centreName;
    this.centreId = selectedCenter.centreId;
    return selectedCenter ? selectedCenter.centreName : selectedCenter;
  }

  displayDepartments(selectedCentreDepartment): string {
    debugger;
    if (!selectedCentreDepartment) {
      return '';
    }
    this.department = selectedCentreDepartment.departmentName;
    this.departmentId = selectedCentreDepartment.departmentId;
    this.coordinator = selectedCentreDepartment.departmentHeadName;
    this.coordinatorId = selectedCentreDepartment.departmentHeadId;
    this.contact = selectedCentreDepartment.departmentHeadContact;

    return selectedCentreDepartment ? selectedCentreDepartment.departmentName : selectedCentreDepartment;
  }

  displayDpms(selectedDpm): string {
    debugger;
    if (!selectedDpm) {
      return '';
    }
    this.dpmId = selectedDpm.dpmId;
    this.dpm = selectedDpm.dpmName;
    this.dpmSelect = selectedDpm.dpmName;
    return selectedDpm ? selectedDpm.dpmName : selectedDpm;
  }

  addTicketFormSubmit(form) {
    debugger;

    this.userService.raiseTicket(form).pipe(first()).subscribe(
      data => {
        debugger;
        if(data.result == 'success') {
          swal.fire({
            type: 'success',
            text: data.message,
          });
          this.router.navigate(['/admin/ticketlist']);
        } else {
          swal.fire({
            type: 'error',
            text: data.message,
          });
        }
      },
      error => {
        debugger;

        swal.fire({
          title: 'Server Error',
          type: 'error',
        });
      });
  }
}
