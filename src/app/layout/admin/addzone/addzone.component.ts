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
  templateUrl: './addzone.component.html',
  styleUrls: ['./addzone.component.scss']
})
export class AddzoneComponent implements OnInit {
  regiForm: FormGroup;

  public form: string;
  zoneCheck;
  //mobnumPattern = '^((\\+27-?)|0)?[0-9]{10}$';
  //emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

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
    this.userService.getZonesHavingName(form.name).subscribe(
      data => {
        debugger;
        if (null == data || data.length == 0) {
          debugger;
          this.userService.addZone(form).pipe(first()).subscribe(
            data => {
              debugger;
              //alert(data);
              swal.fire({
                type: 'success',
                //   title: 'Created!',
                text: '' + data.result ,
              });
              this.router.navigate(['/admin/listzone']);
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
            text: 'We already have this zone name please check',
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

  ngOnInit() {  }
}
