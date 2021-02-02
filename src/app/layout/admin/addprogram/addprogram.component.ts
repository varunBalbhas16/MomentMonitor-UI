import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { filter, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators , NgForm ,FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import { UserService } from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-addprogram',
  templateUrl: './addprogram.component.html',
  styleUrls: ['./addprogram.component.scss']
})
export class AddprogramComponent implements OnInit {
regiForm: FormGroup;
account_validation_messages;   
today=new Date();
  constructor(private fb: FormBuilder,public dialog: MatDialog,private userService: UserService,private route: ActivatedRoute,private router: Router) {
     this.regiForm = fb.group({  
        'programName':['',Validators.compose([
          Validators.maxLength(60),
          Validators.minLength(5),
          //Validators.pattern('^[a-zA-Z \-\']+'),
       Validators.pattern(/^[a-zA-Z0-9.\_\- ]*$/),
          //Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'),
          Validators.required
        ])],    
      'purpose' : [null, Validators.required],
      'startDate' : [null, Validators.required],
      'endDate' : [null, Validators.required]  
    }); 

      this.account_validation_messages = {
          'programName': [
            { type: 'required', message: 'Name is required' },
            { type: 'minlength', message: 'Name must be at least 5 characters long' },
            { type: 'maxlength', message: 'Name cannot be more than 25 characters long' },
            { type: 'pattern', message: 'Your name must contain only numbers and letters' }, 
          ],
        'purpose': [
          { type: 'required', message: 'Purpose is required' },
         ],
        'startDate': [
          { type: 'required', message: 'Start Date is required' },
         ],
          'endDate': [
          { type: 'required', message: 'End Date is required' },
         ]                 
        }  
    }
  ngOnInit() {
  }

 onFormSubmit(form:NgForm)  
  {  
  debugger
    console.log(form); 
  

                 this.userService.addprogramuniquename(form.value.programName).subscribe(
                data => {
debugger
                 if(data.length == 0){
                   debugger
            this.userService.addprogram(form.value).pipe(first()).subscribe(
              data => {
                   debugger
                  //alert(data);
                swal.fire({
                type:'success',
                //title: 'Program added successfully!',
                text: ''+data.description+' added successfully!',              
                });
                  this.router.navigate(['/admin/programlist']);
                },
                error => {
                   
                    //alert("ggg");
                swal.fire({
                title: "Server Error",
                //text: "You will not be able to recover this imaginary file!",
                type: "error",
                 });
                 
                });
                }
                else{
                 swal.fire({
                //title: "Server Error",
               text: 'We already have this program name please check',  
               // type: "error",
                 });
                }
                },
                error => {
                   
                    //alert("ggg");
                swal.fire({
                title: "Server Error",
                //text: "You will not be able to recover this imaginary file!",
                type: "error",
                 });
                 
                });  
  }  

}
