import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.scss']
})

export class EditdepartmentComponent implements OnInit {
  regiForm: FormGroup;
  public form: string;
  deptCheck;
  editdepartmentpage: any={};

  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.regiForm = fb.group({
      name: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.minLength(5),
        Validators.pattern(/^[a-zA-Z0-9.\_\- ]*$/),
        Validators.required
      ])],
      description: ['', Validators.compose(null)],
      departmentId: ['', Validators.compose(null)],
    });

    this.deptCheck = {
      name: [
        {type: 'required', message: 'Department Name is required'},
        {type: 'minlength', message: 'Department Name must be at least 5 characters long'},
        {type: 'maxlength', message: 'Department Name cannot be more than 60 characters long'},
        {type: 'pattern', message: 'Department name must contain only alphabets and numbers'},
      ],
    };
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    debugger;
    this.userService.checkUniqueDepartment(form).subscribe(
      data => {
        debugger;
        // tslint:disable-next-line:triple-equals
        if (data.result == 'success') {
          debugger;
          this.userService.addDepartment(form).pipe(first()).subscribe(
            data => {
              debugger;
              //alert(data);
              swal.fire({
                type: 'success',
                //   title: 'Created!',
                text: data.result,
              });
              this.router.navigate(['/admin/listdepartment']);
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
            text: 'We already have this Department name please check',
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
    debugger;
    this.getDepartment(this.route.snapshot.params['id']);
  }

  private getDepartment(id) {
    debugger;
    this.userService.getDepartmentById(id).subscribe( data => {
      debugger;
      this.regiForm.setValue(data);
      this.editdepartmentpage = data;
    });
  }
}
