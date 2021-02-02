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
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  regiForm: FormGroup;
  school = <any> [];
  account_validation_messages;
  mobnumPattern = '^((\\+27-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.regiForm = fb.group({
      'firstName': ['', Validators.compose([
        // UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z \-\']+'),
        Validators.required
      ])],
      'lastName': ['', Validators.compose([
        // UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z \-\]+'),
        //Validators.pattern(/^[A-z0-9]*$/),
        Validators.required
      ])],
      'contact': ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'roleName': [null, Validators.required],
      'contributorName': [null],
    });

    this.account_validation_messages = {
      'firstName': [
        {type: 'required', message: 'Firstname is required'},
        {type: 'minlength', message: 'Firstname must be at least 3 characters long'},
        {type: 'maxlength', message: 'FirstName cannot be more than 25 characters long'},
        {type: 'pattern', message: 'Your firstName must contain only letters'},

      ],
      'lastName': [
        {type: 'required', message: 'LastName is required'},
        {type: 'minlength', message: 'LastName must be at least 3 characters long'},
        {type: 'maxlength', message: 'LastName cannot be more than 25 characters long'},
        {type: 'pattern', message: 'Your LastName must contain only letters'},

      ],
      'email': [
        {type: 'required', message: 'Email is required'},
        {type: 'pattern', message: 'Enter a valid email'}
      ],
      'contact': [
        {type: 'required', message: 'Contact is required'},
        {type: 'pattern', message: 'Enter valid 10 digit contact number.'}
      ],

    };
  }

  ngOnInit() {
    //this.userlist();
    debugger;
    this.regiForm.controls['contributorName'].valueChanges.subscribe(
      term => {
        debugger;
        if (term != '') {
          debugger;
          this.userService.getSchoolContributorNames(term).subscribe(
            data => {
              debugger;
              this.school = data;
            });
        }
      });
  }

  adduserFormSubmit(form) {
    debugger;
    this.userService.adduser(form).pipe(first()).subscribe(
      data => {
        debugger;
        if(data.result == 'success') {
          swal.fire({
            type: 'success',
            text: '' + data.description + ' added successfully',
          });

          this.router.navigate(['/admin/userlist']);
        } else {
          swal.fire({
            title: 'Server Error',
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
