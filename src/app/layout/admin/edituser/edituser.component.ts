import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  regiForm: FormGroup;
  school = <any> [];
  Name: string = '';
  Email: string = '';
  Contact: string = '';
  Role: string = '';
  edituser: any = {};
  account_validation_messages;
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  //rolename=['Supervisor,'Collecting','Sorting'];
  constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) {

    this.regiForm = fb.group({
      'firstName': ['', Validators.compose([
        // UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z \-\']+'),
        Validators.required
      ])],
      'lastName': ['', Validators.compose([
        // UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
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
        {type: 'minlength', message: 'Firstname must be at least 5 characters long'},
        {type: 'maxlength', message: 'FirstName cannot be more than 25 characters long'},
        {type: 'pattern', message: 'Your firstName must contain only letters'},

      ],
      'lastName': [
        {type: 'required', message: 'LastName is required'},
        {type: 'minlength', message: 'LastName must be at least 5 characters long'},
        {type: 'maxlength', message: 'LastName cannot be more than 25 characters long'},
        {type: 'pattern', message: 'Your lastname must contain only letters'},

      ],
      'email': [
        {type: 'required', message: 'Email is required'},
        {type: 'pattern', message: 'Enter a valid email'}
      ],
      'contact': [
        {type: 'required', message: 'Contact is required'},
        {type: 'pattern', message: 'Enter a the 10 digit number only'}
      ],

    };
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    debugger;
    this.userService.adduser(form).pipe(first()).subscribe(
      data => {
        debugger;
        swal.fire({
          type: 'success',
          text: '' + data.description + ' edited successfully!',
        });
        this.router.navigate(['/admin/userlist']);
      },
      error => {

        //alert("ggg");
        swal.fire({
          title: 'Server Error',
          //text: "You will not be able to recover this file!",
          type: 'error',
        });
      });
  }

  ngOnInit() {
    this.getusers(this.route.snapshot.params['id']);
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

  getusers(id) {
    debugger;
    this.userService.getUsers(id).subscribe(data => {
      debugger;
      // this.regiForm.setValue(data);
      this.edituser = data;
    });
  }
}
