import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-addzone',
  templateUrl: './editzone.component.html',
  styleUrls: ['./editzone.component.scss']
})
export class EditzoneComponent implements OnInit {
  regiForm: FormGroup;

  public form: string;
  zoneCheck;
  editzonepage: any={};

  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private route: ActivatedRoute, private router: Router) {

    this.regiForm = fb.group({

      zone: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.minLength(5),
        Validators.pattern(/^[a-zA-Z0-9.\_\- ]*$/),
        Validators.required
      ])],
      code: ['', Validators.compose([
        Validators.maxLength(8),
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-Z0-9]*$/),
        Validators.required
      ])],
      description: ['', Validators.compose(null)],
      zoneId: ['', Validators.compose(null)],
    });
    this.zoneCheck = {
      zone: [
        {type: 'required', message: 'Zone Name is required'},
        {type: 'minlength', message: 'Zone Name must be at least 5 characters long'},
        {type: 'maxlength', message: 'Zone Name cannot be more than 60 characters long'},
        {type: 'pattern', message: 'Zone name must contain only alphabets and numbers'},
      ],
      code: [
        {type: 'required', message: 'Zone Number is required'},
        {type: 'minlength', message: 'Zone Number must be at least 1 letter or number'},
        {type: 'maxlength', message: 'Zone Number cannot be more than 8 characters'},
        {type: 'pattern', message: 'Zone Number must contain only alphabets and numbers'},
      ],
    };
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    debugger;
    this.userService.checkUniqueZone(form).subscribe(
      data => {
        debugger;
        // tslint:disable-next-line:triple-equals
        if (data.result === 'success') {
          debugger;
          this.userService.editZone(form).pipe(first()).subscribe(
            data => {
              debugger;
              swal.fire({
                type: 'success',
                text: data.result,
              });
              this.router.navigate(['/admin/listzone']);
            },
            error => {
              swal.fire({
                title: 'Server Error',
                type: 'error',
              });
            });
        } else {
          swal.fire({
            text: '' + data.message,
          });
        }
      },
      error => {
        swal.fire({
          title: 'Server Error',
          type: 'error',
        });
      });
  }

  ngOnInit() {
    debugger;
    this.getZone(this.route.snapshot.params['id']);
  }

  private getZone(id) {
    debugger;
    this.userService.getZoneById(id).subscribe( data => {
      debugger;
      this.regiForm.setValue(data);
      this.editzonepage = data;
    });
  }
}
