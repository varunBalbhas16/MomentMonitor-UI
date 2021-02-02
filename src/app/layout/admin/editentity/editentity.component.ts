import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import {MatDialog} from '@angular/material';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-editentity',
  templateUrl: './editentity.component.html',
  styleUrls: ['./editentity.component.scss']
})
export class EditentityComponent implements OnInit {
  account_validation_messages;
  regiForm: FormGroup;
  mobnumPattern = '^((\\+27-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.regiForm = fb.group({
      'contributorid': null,
      'type': null,
      'status': null,
      'name': ['', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        //Validators.pattern('^[a-zA-Z \-\']+'),
        //   Validators.pattern(/^[A-z0-9.]*$/),
        Validators.pattern(/^[a-zA-Z0-9.\_\- ]*$/),
        //Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'),
        Validators.required
      ])],
      'address': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
      'landmark': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
      'contactperson': [null, Validators.required],
      'mobilenumber': ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    });
    this.account_validation_messages = {
      'name': [
        {type: 'required', message: 'Name is required'},
        {type: 'minlength', message: 'Name must be at least 5 characters long'},
        {type: 'maxlength', message: 'Name cannot be more than 25 characters long'},
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

    this.userService.addentity(form).pipe(first()).subscribe(
      data => {
        debugger;
        //alert(data);
        swal.fire({
          type: 'success',
          //title: 'Entity edited successfully!',
          text: '' + data.name + ' edited successfully!',
        }).then(function() {
          location.reload();
        });
        this.router.navigate(['/admin/listentity']);
      },
      error => {

        alert('ggg');
        swal.fire({
          title: 'Server Error',
          //text: "You will not be able to recover this file!",
          type: 'error',
        });
      });
  }

  ngOnInit() {
    this.getEntity(this.route.snapshot.params['id']);
  }

  getEntity(id) {
    this.userService.getentity(id).subscribe(data => {
      //this.contributorid = data.contributorid;
      this.regiForm.setValue(data);
    });
  }


}
