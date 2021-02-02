import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
//import { UserService } from '../../../services/user.service';
import { SchooladminService } from '../../../services/schooladmin.service';
@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',
  styleUrls: ['./addfile.component.scss']
})
export class AddfileComponent implements OnInit {
profileForm: FormGroup;
  error: string;

  fileUpload = {status: '', message: '', filePath: ''};

  constructor(private fb: FormBuilder, private schooladminService: SchooladminService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['18'],
      uploadingFile: ['']
    });
  }

  onSelectedFile(event) {
  debugger
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('uploadingFile').setValue(file);
    }
  }

  onSubmit() {
  debugger
    const formData = new FormData();
        formData.append('schoolKey', localStorage.schooladmincontributorId);
    formData.append('uploadingFile', this.profileForm.get('uploadingFile').value);

   /* this.schooladminService.upload(formData).subscribe(
     res => {
     debugger
     this.fileUpload = res},
     err => {
     debugger
     this.error = err}
    );
  */

      this.schooladminService.upload(formData).pipe(first()).subscribe(
              data => {
               debugger    
                this.fileUpload = data;
          
                },
                error => {
                debugger
                this.error = 'err';
               
              });  
}
}