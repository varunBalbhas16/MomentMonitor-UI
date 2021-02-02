import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-addentity',
  templateUrl: './addentity.component.html',
  styleUrls: ['./addentity.component.scss']
})
export class AddentityComponent implements OnInit {
  regiForm: FormGroup;
  regiForm1: FormGroup;
  public form: string;
  account_validation_messages;
  mobnumPattern = '^((\\+27-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private route: ActivatedRoute, private router: Router) {

    this.regiForm = fb.group({
      'type': ['school'],
      'name': ['', Validators.compose([
        Validators.maxLength(60),
        Validators.minLength(5),
        //Validators.pattern('^[a-zA-Z \-\']+'),
        // Validators.pattern(/^[A-z0-9.]*$/),
        Validators.pattern(/^[a-zA-Z0-9.\_\- ]*$/),
        Validators.required
      ])],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
      'landmark': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
      'contactperson': [null, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      'mobilenumber': ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],

    });

    this.regiForm1 = fb.group({
      'type': ['retailer'],
      'name': ['', Validators.compose([
        Validators.maxLength(60),
        Validators.minLength(5),
        //Validators.pattern('^[a-zA-Z \-\']+'),
        //  Validators.pattern(/^[A-z0-9.]*$/),
        Validators.pattern(/^[a-zA-Z0-9.\_\- ]*$/),
        //Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'),
        Validators.required
      ])],
      'address': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
      'landmark': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
      'contactperson': [null, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      'mobilenumber': ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    });

    this.account_validation_messages = {
      'name': [
        {type: 'required', message: 'Name is required'},
        {type: 'minlength', message: 'Name must be at least 5 characters long'},
        {type: 'maxlength', message: 'Name cannot be more than 60 characters long'},
        {type: 'pattern', message: 'Your name must contain only numbers and letters'},
      ],
      'address': [
        {type: 'required', message: 'Address is required'},
      ],
      'landmark': [
        {type: 'required', message: 'Landmark is required'},
      ],
      'contactperson': [
        {type: 'required', message: 'Address is required'},
        {type: 'pattern', message: 'Enter a letters only'}
      ],
      'mobilenumber': [
        {type: 'required', message: 'Landmark is required'},
      ],
      'email': [
        {type: 'required', message: 'Email is required'},
        {type: 'pattern', message: 'Enter a valid email'}
      ],
    };
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
  debugger

    this.userService.addentityuniquename(form.name).subscribe(
      data => {
      debugger
        if (data.length == 0) {
        debugger
          this.userService.addentity(form).pipe(first()).subscribe(
            data => {
            debugger
              //alert(data);
              swal.fire({
                type: 'success',
                //   title: 'Created!',
                text: '' + data.name + ' created successfully.',
              });
              this.router.navigate(['/admin/listentity']);
            },
            error => {

              // alert("ggg");
              swal.fire({
                title: 'Server Error',
                //text: "You will not be able to recover this file!",
                type: 'error',
              });
            });

        } else {
          swal.fire({
            // title: "Server Error",
            text: 'We already have this entity name please check',
            // type: "error",
          });
        }
      },
      error => {

        //alert("ggg");
        swal.fire({
          title: 'Server Error',
          //text: "You will not be able to recover this imaginary file!",
          type: 'error',
        });

      });
  }

  ngOnInit() {
  }

  openschoolform() {
    this.form = 'School';
  }

  openretailerform() {
    this.form = 'Retailer';
  }

  toggleChange(event) {

    let toggle = event.source;
    if (toggle) {
      let group = toggle.buttonToggleGroup;
      if (event.value.some(item => item == toggle.value)) {
        group.value = [toggle.value];
        this.form = group.value;
      }
    }
  }
}
