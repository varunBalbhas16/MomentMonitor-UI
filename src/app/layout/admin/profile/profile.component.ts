import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,NgForm} from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  //isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public form:string;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
   this.firstFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      newpassword: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }
  onFormSubmit(form:NgForm)
  {
    debugger
    console.log(form);
  }

}
