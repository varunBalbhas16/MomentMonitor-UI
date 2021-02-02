import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm,FormControl} from '@angular/forms'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-editprogram',
  templateUrl: './editprogram.component.html',
  styleUrls: ['./editprogram.component.scss']
})
export class EditprogramComponent implements OnInit {
regiForm: FormGroup;  
  programName: string;
    startDate: Date;
    endDate: Date;
    purpose: string;
    account_validation_messages
  editprogramdetails:any ={};
  constructor(private fb: FormBuilder,private userService: UserService,private route: ActivatedRoute,private router: Router) { 
 
   this.regiForm = fb.group({  
      'programId':null,
      'status':null,
      'createDate':null,
      'programName':['',Validators.compose([
          Validators.maxLength(60),
          Validators.minLength(5),
          //Validators.pattern('^[a-zA-Z \-\']+'),
          Validators.pattern(/^[a-zA-Z0-9.\_\- ]*$/),
          //Validators.pattern('^(?=.*[a-zA-Z])[a-zA-Z0-9]+$'),
          Validators.required
        ])],    
      'purpose' : [null, Validators.required],
      'startDate': [null, Validators.required],
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
  this.getProgram(this.route.snapshot.params['id']);
  }
onFormSubmit(form:NgForm)  
  {  
    console.log(form);  
    debugger
    console.log(form); 
     this.userService.addprogram(form).pipe(first()).subscribe(
              data => {
                   debugger
                  //alert(data);
              swal.fire({
                type:'success',
                //title: 'Program edited successfully!',
                text: ''+data.description+' edited successfully!',              
              });
                  this.router.navigate(['/admin/programlist']);
                },
                error => {
                   
                    //alert("ggg");
                swal.fire({
                title: "Server Error",
                //text: "You will not be able to recover this file!",
                type: "error",
                 });
                });  
  }  
    getProgram(id){
    debugger
      this.userService.getprogram(id).subscribe(data=>{
      debugger
     this.editprogramdetails = data;
      this.editprogramdetails.startDate = new Date(this.editprogramdetails.startDate).toISOString();
      this.editprogramdetails.endDate = new Date(this.editprogramdetails.endDate).toISOString();

   this.regiForm.setValue(this.editprogramdetails);
 
   });  
    }
}
