import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , NgForm } from '@angular/forms'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialog} from '@angular/material';
/*import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';*/
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-schooladminpage',
  templateUrl: './schooladminpage.component.html',
  styleUrls: ['./schooladminpage.component.scss']
})
export class SchooladminpageComponent implements OnInit {
regiForm: FormGroup;  
  constructor(private fb: FormBuilder,public dialog: MatDialog) {   
    this.regiForm = fb.group({  
      'SchoolAdmin' : [null, Validators.required],   
      'Program' : [null, Validators.required],
      'Class' : [null, Validators.required],
      'Section' : [null, Validators.required],
      'Student' : [null, Validators.required]
    });  
  
  }
  ngOnInit() {
  }
  onFormSubmit(form:NgForm)  
  {  
    console.log(form); 
     /*this.userService.addprogram(form).pipe(first()).subscribe(
              data => {
                   debugger
                  //alert(data);
                swal.fire({
                type:'success',
                //title: 'Created!',
                text: 'Program added successfully.',              
                });
                  this.router.navigate(['/admin/schooladminhistory']);
                },
                error => {
                   
                    //alert("ggg");
                swal.fire({
                title: "Server Error",
                //text: "You will not be able to recover this imaginary file!",
                type: "error",
                 });
                 
                });*/ 
  }

}
